import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LonginService } from 'src/app/services/longin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //生命一个对象
  // public longin: any = {
  //   username: '',
  //   password: '',
  // }
  public list: any[] = [];
  // constructor() { }
  constructor(public storage: LonginService) { 
    let t = this.storage.longin;
    console.log(t);
  }
  // constructor(public http: HttpClient) { }
  ngOnInit() {
    this.passWord();
  }
  
  //longin11
  doSunmit(){
    let user = this.storage.longin;
    console.log(user);
    alert('用户' + user.username + '欢迎光临');
    
  }
  getLogin(){
    let user = this.storage.longin.username;
    let pass = this.storage.longin.password;
    if(user == 'lyf' && pass == 123456){
      return this.doSunmit();
    }else{
      alert('用户名或密码错误，您将以游客身份进入')
    }
  }

  passWord(){
    let password = <HTMLInputElement>document.getElementById('pass');
    let image = <HTMLInputElement>document.getElementById('image');
    let flag = 1
    image.onclick = function(){
      if(flag == 1){
        password.type ='password';
        
       image.src = '../../../assets/img/password/close.png'
        flag = 0;
      }else{
        password.type = 'text';
        image.src = '../../../assets/img/password/open.png'
        flag = 1;
      }
    }
   
  }
}
