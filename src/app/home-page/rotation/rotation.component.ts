import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rotation',
  templateUrl: './rotation.component.html',
  styleUrls: ['./rotation.component.css']
})
export class RotationComponent implements OnInit {
  // items = document.getElementsByClassName('items');
  // points = document.getElementsByClassName('point');//dian
  // goon = document.getElementById('goon');
  // gonext = document.getElementById('gonext');
  // index = 0;
  // ClearActive(items,points){
  //   for(var i=0; i<items.length; i++){
  //       items[i].className = 'items';
  //   }
  //   for(var i=0; i<points.length; i++){
  //       points[i].className = 'point';
  //   }
  //   }
  // goindex(index,points,items,ClearActive){
  //     ClearActive();
  //     console.log(index);
  //     points[index].className = 'point active';
  //     items[index].className = 'items active';
  //   }

  // gotonext(index,goindex){
  //     if(index<2){
  //         index++;
  //     }else{
  //         index = 0;
  //     }
        
  //     goindex();
  //   }
  //   gotoon(index,goindex){
  //     if( index == 0){
  //         index=2;
  //     }else{
  //         index--;
  //     }
  //     goindex();
  //     } 

  constructor() { }

  ngOnInit() {
  }

}
