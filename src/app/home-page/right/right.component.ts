import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {
  // public tim = document.querySelector('.time');
  // public day = new Date();
  // public time = this.day.getHours();
  // if(time < 12){
    
  // }
  constructor() { }

  ngOnInit() {
    this.getHello();
  }
  getHello(){
    let hello = document.querySelector('.hello');
    let day = new Date();
    let time = day.getHours();
    if(time < 12){
      hello.innerHTML = '上午好'
    } else if(time <18){
      hello.innerHTML = '下午好'
    }else{
      hello.innerHTML = '晚上好'
    }
  }

}

