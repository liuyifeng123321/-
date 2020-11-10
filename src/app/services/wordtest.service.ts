//模拟服务定义接口的service
import { Injectable } from '@angular/core';
//单词接口
import { wordtwo } from '../sql/export';
import { wordtw } from '../sql/word-two';
import { wordfor } from '../sql/word-for';
//语法接口
import { program } from '../sql/export';
// import {prog} from '../sql/programDate';
import { from } from 'rxjs';
// 从 RxJS 中导入 可视化Observable 和 of 符号。
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//错误处理
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WordtestService {
  private wordUrl = 'api/word';
  private proUrl = 'api/program';
  //获取Ⅳ单词
  getWordFour(): wordtwo[]{
    return wordfor;
  }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,) { }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  log(arg0: string) {
    throw new Error("Method not implemented.");
  }
  // 在 HTTP 教程中，你将会调用 HttpClient.get<Hero[]>() 
  // 它也同样返回一个 Observable<Hero[]>，它也会发出单个值，这个值就是来自 HTTP 响应体中的英雄数组。
  // <>中是获取的接口
  getWore(id: number): Observable<wordtwo[]>{
    // 返回的是数据
    // return of(wordtw)  .pipe处理错误
    const url = `${this.wordUrl}/${id}`;
    return this.http.get<wordtwo[]>(this.wordUrl)
    .pipe(
      // tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<wordtwo[]>(`getWore id = ${id}`))
    );
  }
 getPro(id: number): Observable<program[]>{
   const url = `${this.proUrl}/${id}`;
   return this.http.get<program[]>(this.proUrl)
  //  .pipe(
  //   // tap(_ => this.log('fetched heroes')),
  //   catchError(this.handleError<program[]>(`getPro id = ${id}`))
  // );
 }
  //update
  updateWord(word: wordtwo): Observable<any> {
    return this.http.put(this.wordUrl, word, this.httpOptions).pipe(
      tap(_ => this.log(`updated word id=${word.id}`)),
      catchError(this.handleError<any>('updateWord'))
    );
  }
  //add 不能使用all.checked使用checked属性，要使用all['checked']。
  addWord (addword: wordtwo): Observable<wordtwo> {
    return this.http.post<wordtwo>(this.wordUrl, addword, this.httpOptions).pipe(
      tap((newHero: wordtwo) => this.log(`added hero w/ id=${wordtw['id']}`)),
      catchError(this.handleError<wordtwo>('addWord'))
    );
  }
  //dele删除方法 interface  
  // deletWord(word: wordtwo | number):Observable<wordtwo>{
  //   const id = typeof wordtw === 'number' ? wordtw : wordtw.id;
  //   const url = `${this.wordUrl}/${id}`;
  //   return this.http.delete<wordtwo>(url, this.httpOptions).pipe(
  //     tap(_ => this.log(`deleted hero id=${wordtw['id']}`)),
  //   catchError(this.handleError<wordtwo>('deleteword'))
  //   );
  // }
  // serch??
  searchHeroes(term: string): Observable<wordtwo[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<wordtwo[]>(`${this.wordUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found heroes matching "${term}"`) :
         this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<wordtwo[]>('searchHeroes', []))
    );
  }
  
}
