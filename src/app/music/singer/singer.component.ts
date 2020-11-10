import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-singer',
  templateUrl: './singer.component.html',
  styleUrls: ['./singer.component.css']
})
export class SingerComponent implements OnInit {
  public list: any [] = [];
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.getSinger();
  }
  getSinger(){
    let api = 'http://localhost:3000/top/artists';
    this.http.get(api).subscribe((response: any) =>{
      console.log(response);
      this.list = response.artists;
    })
  }

}
