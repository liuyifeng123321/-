import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { LonginService } from 'src/app/services/longin.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor(public storage: LonginService) { 
    this.storage.regisuser();
    this.storage.regispass();
    // this.passWord();
  }

  ngOnInit() {
  }
  // passWord(){
  //   let inp = <HTMLInputElement>document.getElementById('pass');
  //   let massage = document.getElementById('massage');
  //   inp.onblur = function(){
  //     if(inp.value.length<6 || inp.value.length > 16){
  //       // massage.className = ''
  //       massage.innerHTML = '输入错误请输入6-16位'
  //     }else{
  //       massage.innerHTML = '输入正确'
  //     }
  //   }
  // }

  
}
