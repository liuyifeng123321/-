import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { wordtwo } from '../../sql/export'
import { wordfor } from '../../sql/word-for';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WordService {
  private wordforUrl = 'api/wordfor'
  constructor(private http: HttpClient) { }
  getWordFor(): Observable<wordtwo[]>{
    // return of (wordfor);
    return this.http.get<wordtwo[]>(this.wordforUrl)
  }
}
