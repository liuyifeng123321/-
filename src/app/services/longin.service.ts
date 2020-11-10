import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LonginService {
  public user: any [] = [];
  public passer: any [] = [];
  public keyword: string;
  constructor() { }
  //生命一个对象
  public longin: any = {
    username: '',
    password: '',
  }

  longHead(){
    let use = this.longin.username;
    let pass = this.longin.password;
    // alert('用户' + use + '欢迎光临')
  }
  //设置数据
  set(key: string, value: any){
    localStorage.setItem(key, JSON.stringify(value));
  }
  //返回数据
  get(key: string){
    return JSON.parse(localStorage.getItem(key))
  }

  regisuser(){
    if(this.user.indexOf(this.keyword)==-1){
      this.user.push(this.keyword);
      this.set('searchlist',this.user);
    }
    this.keyword = '';
  }

  regispass(){
    if(this.passer.indexOf(this.keyword)==-1){
      this.passer.push(this.keyword);
      this.set('searchlist',this.passer);
    }
    this.keyword = '';
  }
}
