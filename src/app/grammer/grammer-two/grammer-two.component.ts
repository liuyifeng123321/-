import { Component, OnInit } from '@angular/core';
import { progtwo } from '../../sql/programDate';
@Component({
  selector: 'app-grammer-two',
  templateUrl: './grammer-two.component.html',
  styleUrls: ['./grammer-two.component.css']
})
export class GrammerTwoComponent implements OnInit {
 grammer = progtwo;
  constructor() { }

  ngOnInit() {}
 

}
