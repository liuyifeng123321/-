import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css']
})
export class FashionComponent implements OnInit {
  // list: any;
  // public list: any [] = [];
  public list: any[] = [];
  constructor(public http: HttpClient) { }
  // public http: HttpClient
  ngOnInit() {
    this.getData();
  }

  getData(){
    //http://localhost:3000/banner
    //获取推荐歌单
    let api = 'http://localhost:3000/top/playlist';
    this.http.get(api).subscribe((res: any) => {
      console.log(res);
      this.list = res.playlists;
      // console.log(this.list)
    })
  }
}
