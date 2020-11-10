import { Component, OnInit } from '@angular/core';
import { progtwo } from '../../../sql/programDate'
@Component({
  selector: 'app-grammer-admin',
  templateUrl: './grammer-admin.component.html',
  styleUrls: ['./grammer-admin.component.css']
})
export class GrammerAdminComponent implements OnInit {
  grammer = progtwo;
  constructor() { }


  ngOnInit() {
    this.dielct();
  }
  dielct(){
    let tbody = document.querySelector('tbody')
    let but = document.querySelector('.del')
    for(let i = 0; i < progtwo.length; i++){
      let tr = document.createElement('tr');
      tbody.appendChild(tr)
      for(let k in progtwo[i]){
        let td = document.createElement('td');
        td.innerHTML = progtwo[i][k]
        tr.appendChild(td)
      }
      let td = document.createElement('td');
      td.innerHTML = '<a href="javascript:;">删除</a>'
      tr.appendChild(td)
    }
    // delect
    let as = document.querySelectorAll('a')
    for(let i = 0; i<as.length; i++){
      as[i].onclick = function(){
        // let parent = ( <HTMLElement>( <HTMLElement>event.target ).parentNode );
        tbody.removeChild(this.parentNode.parentNode)
        // as.style.display = 'none';
      }
    }
  }

}
