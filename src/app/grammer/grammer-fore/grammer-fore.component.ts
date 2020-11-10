import { Component, OnInit } from '@angular/core';
import { profor } from '../../sql/programDate'
@Component({
  selector: 'app-grammer-fore',
  templateUrl: './grammer-fore.component.html',
  styleUrls: ['./grammer-fore.component.css']
})
export class GrammerForeComponent implements OnInit {
  grammer = profor;
  constructor() { }


  ngOnInit() {
  }

}
