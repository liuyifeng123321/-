import { Component, OnInit } from '@angular/core';
import { wordfive } from '../../sql/word-for';
@Component({
  selector: 'app-nfive',
  templateUrl: './nfive.component.html',
  styleUrls: ['./nfive.component.css']
})
export class NfiveComponent implements OnInit {
  wordfive = wordfive;
  constructor() { }

  ngOnInit() {
  }

}
