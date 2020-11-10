import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//引入数据操作 的服务
import { wordtw } from '../../sql/word-two';
import { WorddataService } from '../../services/worddata.service'
import { id_ID } from 'ng-zorro-antd';
// import { wordtwo } from 'src/app/sql/export';
import { WordtestService } from '../../services/wordtest.service';
@Component({
  selector: 'app-ntwo',
  templateUrl: './ntwo.component.html',
  styleUrls: ['./ntwo.component.css']
})
export class NtwoComponent implements OnInit {

  // word: wordtwo[];
  wordtw = wordtw
  // private sqlService: SqlService,
  constructor(private wordtestServes: WordtestService) { 
    
  }
  
  ngOnInit() {
    // this.getWord();
  }
  // getWord(): void {
  //   // this.heroes = this.heroService.getHeroes();
  //   this.wordtestServes.getWore(1)
  //   .subscribe(word => this.word = word)
  // }
  // getword(): void{
  //   // let api = 'http://localhost:4200/api/word'pp
  //   // this.sqlService.getWord()
  //   // .subscribe(word => this.word = word)

  // }

}
