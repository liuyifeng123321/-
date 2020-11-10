import { Component, OnInit } from '@angular/core';
import { prothree } from '../../sql/programDate'
import { from } from 'rxjs';

@Component({
  selector: 'app-grammer-three',
  templateUrl: './grammer-three.component.html',
  styleUrls: ['./grammer-three.component.css']
})
export class GrammerThreeComponent implements OnInit {
  grammer = prothree
  constructor() { }

  ngOnInit() {
  }

}
