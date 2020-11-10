import { Injectable } from '@angular/core';
import { ServiseModule } from './services.module'
import { from, Observable } from 'rxjs';
import { Banner } from './data-types/common.types';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators';

@Injectable({
  providedIn: ServiseModule
})
export class SingService {
  // http: any;

  constructor(private http: HttpClient) { }
  getBanners(): Observable<Banner[]>{
    return this.http.get('http://localhost:3000/banner')
    .pipe(map((res: {banners:Banner[] })=>res.banners));
  }
}
