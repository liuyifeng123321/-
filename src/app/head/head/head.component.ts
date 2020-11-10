import { Component, OnInit } from '@angular/core';
import { LonginService } from '../../services/longin.service';
@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  // public serch: any;
  // public msg: string = 'fnowf'
  //以下 使用服务
  constructor(public storage: LonginService) { 
    let user = this.storage.longHead();
  }

  ngOnInit() {
    this.serch();
  }
  // toSerch(){
  //   console.log(this.serch);
    
  // }
  serch(){
    let serch = <HTMLInputElement>document.getElementById('serch');
    //得到焦点
    serch.onfocus = function(){
      if(serch.value === '搜索不好用，白叟'){
        serch.value = ''
      }
      serch.style.color = '#333'
    }
    //
    serch.onblur = function(){
      if(serch.value ===''){
        serch.value = '搜索不好用，白叟'
      }
      serch.style.color = '#999'
    }

  }
}
