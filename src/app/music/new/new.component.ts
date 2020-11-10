import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  public list: any [] = [];
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.newSing();
  }
  // getData(){
  //   //
  //   //jingxuangedan
  //   let api = 'http://localhost:3000/top/playlist';
  //   this.http.get(api).subscribe((response: any) => {
  //     console.log(response);
  //     this.list = response.result;
  //   })
  // }
  newSing(){
    let api = 'http://localhost:3000/top/song';
    this.http.get(api).subscribe((response: any) => {
      console.log(response);
      this.list = response.data;
    })
  }
}
