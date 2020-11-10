import { Component, OnInit } from '@angular/core';
//引用服务
import { WordtestService } from '../../services/wordtest.service';
import { wordtwo } from 'src/app/sql/export';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nthree',
  templateUrl: './nthree.component.html',
  styleUrls: ['./nthree.component.css']
})
export class NthreeComponent implements OnInit {

  //定义变量 word存放数据
  word: wordtwo[];
  constructor(private wordtestServes: WordtestService,public http: HttpClient) { }

  ngOnInit() {
    this.getWord();
  }
  //获取数据方法
  // getWord(): void {
  //   this.word = this.wordtestServes.getWord();
  // }
  // getMusic(){
  //   let api = 'http://localhost:3000/banner';
  //   this.http.get(api).subscribe((response: any) =>{
  //     console.log(response);
  //     this.musicList = response.result;
  //   })
  // }

  getWord(): void{
    // subscribe() 方法把数组传给这个回调函数
    // ，该函数把数组赋值给组件的 heroes 属性。
    // this.wordtestServes.getWore()
    // .subscribe(word => this.word = word);
    this.wordtestServes.getWore(1)
    .subscribe(word => this.word = word)
  }

}
