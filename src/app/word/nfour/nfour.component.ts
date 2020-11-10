import { Component, OnInit } from '@angular/core';
import { wordfor } from '../../sql/word-for';
// import { WordService } from '../../services/word/word.service';
import { wordtwo } from 'src/app/sql/export';
// import { HttpClient } from '@angular/common/http';
// import { wordtw } from 'src/app/sql/word-two';
@Component({
  selector: 'app-nfour',
  templateUrl: './nfour.component.html',
  styleUrls: ['./nfour.component.css']
})
export class NfourComponent implements OnInit {
  // wordfour: wordtwo[];
  wordfour = wordfor;
  constructor() { }

  ngOnInit() { }
  // getWordFor(): void {
  //   // this.wordfour = this.wordService.getWordFor();
  //   this.wordService.getWordFor()
  //   .subscribe(wordfour => this.wordfour = wordfour)
  // }
}
