import { Component, OnInit } from '@angular/core';
// import { wordtw } from '../../../sql/word-two';
import { WordtestService } from '../../../services/wordtest.service';
import { wordtw } from '../../../sql/word-two';
import { Button } from 'protractor';
@Component({
  selector: 'app-word-admin',
  templateUrl: './word-admin.component.html',
  styleUrls: ['./word-admin.component.css']
})
export class WordAdminComponent implements OnInit {
  // word: wordtw[];
  // word: wordtwo[];
  word = wordtw
  constructor(private wordtestService: WordtestService) { }

  ngOnInit() {
    // this.getWord();
    this.join();
    
  }
  //获取数据方法
  // getWord(): void{
  //   this.wordtestService.getWore(1)
  //   .subscribe(word => this.word = word)
  // }
  //加入
  
  join(){
    var id = document.querySelector('.id')
    var wor = document.querySelector('.wor')
    var jm = document.querySelector('.jm')
    var fy = document.querySelector('.fy')
    var tbody = document.querySelector('tbody')
    var join = document.querySelector('.join')
    var trl = document.querySelector('.trl')
    //获取input内容人
    join.addEventListener('click',function(){
      //生成节点
      var tr = document.createElement('tr')
      var trid = document.createElement('td')
      var trwor = document.createElement('td')
      var trjm = document.createElement('td')
      var trfy = document.createElement('td')
      var but = document.createElement('td')
      //将inpu值给节点
      trid.innerHTML = id.value
      trwor.innerHTML = wor.value
      trjm.innerHTML = jm.value
      trfy.innerHTML = fy.value
      but.innerHTML = '<input type="button" value="删除">'
      //将节点添加到表格中
      tbody.insertBefore(tr,tbody.children[0])
      tbody.insertBefore(trid,tbody.children[0])
      tbody.insertBefore(trwor,tbody.children[1])
      tbody.insertBefore(trjm,tbody.children[2])
      tbody.insertBefore(trfy,tbody.children[3])
      tbody.insertBefore(but,tbody.children[4])
      // //删除接单
      // but.parentNode.removeChild(tr)
    })
  }
}
