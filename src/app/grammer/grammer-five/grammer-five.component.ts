import { Component, OnInit } from '@angular/core';
import { profive } from '../../sql/programDate'
@Component({
  selector: 'app-grammer-five',
  templateUrl: './grammer-five.component.html',
  styleUrls: ['./grammer-five.component.css']
})
export class GrammerFiveComponent implements OnInit {
  grammer = profive;
  constructor() { }

  ngOnInit() {
  }

}
