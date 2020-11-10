import { Component, OnInit,Input } from '@angular/core';
// import { SingService } from 'src/services/sing.service';
// import { SingComponent } from '../app.components.ts'?
import { HttpClient } from '@angular/common/http';
import { log } from 'ng-zorro-antd';

@Component({
  selector: 'app-sing',
  templateUrl: './sing.component.html',
  styleUrls: ['./sing.component.css']
})
export class SingComponent implements OnInit {
  public list:any[] = [];
  // public musicList: any[] = [];

  //chuanzhi 
  @Input()serch: any;
  @Input() msg: string;
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.getData();
    // this.getMusic();
  }
  
  getData(){
    //http://localhost:3000/banner
    //获取推荐歌单
    let api = 'http://localhost:3000/personalized';
  
    this.http.get(api).subscribe((res: any) =>{
      console.log(res);
      this.list = res.result;
    })

   
  }
  // getMusic(){
  //   let api = 'http://localhost:3000/banner';
  //   this.http.get(api).subscribe((response: any) =>{
  //     console.log(response);
  //     this.musicList = response.result;
  //   })
  // }

}
