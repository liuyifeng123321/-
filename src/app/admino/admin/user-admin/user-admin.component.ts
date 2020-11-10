import { Component, OnInit } from '@angular/core';
import { use } from '../../../sql/user';
import { NzTbodyDirective } from 'ng-zorro-antd';
@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent implements OnInit {
  user = use
  constructor() { }

  ngOnInit() {
    this.join();
  }
  join() {
    var userName = document.querySelector('.user')
    var passWord = document.querySelector('.pass')
    var but = document.querySelector('.join')
    var tbody = document.querySelector('tbody')
    //创建节点 将获取的input呢容给节点
    but.addEventListener('click',function(){
      // alert(1)
      var tr = document.createElement('tr')
      var trname = document.createElement('td')
      var trpass = document.createElement('td')
      //将inpu值赋给节点
      trname.innerHTML = userName.value
      trpass.innerHTML = passWord.value
      //把节点加入
      tbody.insertBefore(tr, tbody.children[0])
      tbody.insertBefore(trname,tbody.children[0])
      tbody.insertBefore(trpass,tbody.children[1])
    })
  }
}
