import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weixin',
  templateUrl: './weixin.component.html',
  styleUrls: ['./weixin.component.css']
})
export class WeixinComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.lyb();
  }
  lyb(){
    var ul = document.getElementById('uls')
        let but = document.getElementById('but')
        let text = document.querySelector('textarea')
       
        //注册时间
        but.onclick = function(){
            if(text.value == ''){
                alert('您没输入内容')
                return false;
            }else{
                //生成一个节点
                let li = document.createElement('li');
                
                //把文本框内容加入li 并增加删除连接 javascript:;组织连接跳转
                li.innerHTML = text.value 
                // + "<a href='javascript:;'>删除</a>"
                //添加元素
                // ul.appendChild(li)
                ul.insertBefore(li , ul.children[0]);

           
            }
        }
  }
}
