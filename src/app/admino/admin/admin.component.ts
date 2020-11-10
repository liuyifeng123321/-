import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getKl();
  }
  getKl(){
  
    let kl = prompt('输入验证口令');
  while(kl !=='桜好き') {
    kl = prompt('sb，输错了')
  }
  alert('欢迎您管理员')
  }

}
