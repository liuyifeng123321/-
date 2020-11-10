import { Injectable } from '@angular/core';
import { program } from '../sql/export';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProtestService {
  private proUrl = 'api/program';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }
  // getHeroes (): Observable<Hero[]> {
  //   return this.http.get<Hero[]>(this.heroesUrl)
  // }
  getPro(): Observable<program[]>{
    return this.http.get<program[]>(this.proUrl)
  }
}
