import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lb',
  templateUrl: './lb.component.html',
  styleUrls: ['./lb.component.css']
})
export class LbComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.animal()
  }
  //动画函数
  animal(){
    function animate(obj,target,callback){
      //给不同元素添加不同定时器
      clearInterval(obj.timer)
      obj.timer = setInterval(function(){
          //缓动动画 步长值 = （目标位置 - 现在位置）/10
          var step = (target - obj.offsetLeft) / 10
          step = step > 0 ? Math.ceil(step) : Math.floor(step)
      if(obj.offsetLeft == target){
          clearInterval(obj.timer)
          if(callback){
              callback()
          }
      }
      obj.style.left = obj.offsetLeft + step + 'px'
  },15)
  }


  //
  window.addEventListener('load',function(){
    //获取元素当鼠标经过时显示箭头
    var goon = document.querySelector('#goon')
    var gonext = document.querySelector('#gonext')
    // var but = document.querySelector('')
    var wrap = document.querySelector('.wrap')
    wrap.addEventListener('mouseenter',function(){
        goon.style.display = 'block'
        gonext.style.display = 'block'
        //鼠标在停止自动播放
        clearInterval(timer)
        timer = null //清除定时器变量
    })
    //鼠标离开时隐藏
    wrap.addEventListener('mouseleave',function(){
        goon.style.display = 'none'
        gonext.style.display = 'none'
        //鼠标离开自动播放
        timer = setInterval(function(){
            //手动调用点击事件
            gonext.click()
        },5000)
    })
    //动态生成校园侵权
    var ul = wrap.querySelector('ul')
    var ol = wrap.querySelector('.pointlist')
    // console.log(ul.children.length);
    
    //for循环创建一个li节点并将节点添加到ol中
    for(var i = 0; i < ul.children.length; i++){
        //创建节点
        var li = document.createElement('li')
        //通过自定义属性记录li的索引号
        li.setAttribute('index',i)
        // console.log(li);
        //charu 把li插入到ol中
        ol.appendChild(li);
        //小圆圈点击变色
        li.addEventListener('click', function(){
            //清除所有的样式
            for(let i = 0; i < ol.children.length; i++){
                ol.children[i].className = '';
            }
            this.className = 'active'
            //动画点击右侧按钮ul移动 li索引号* 图片宽度
            // var image = list.querySelector('img')
            //获取索引号
            var index = this.getAttribute('index')
            //当点击 li后把他的索引号给num
            num = index
            circle = index
          
            //获取图片宽度
            // var focusWidth = image.offsetWidth;
            // console.log(focusWidth);
            console.log(index);
            animate(ul, -index * 800)
            
        })
    }
    //baol里面第一个li雷鸣设置
    ol.children[0].className = 'active'
    //克隆第一张图片到后面
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first)
    //点击右侧按钮，图片滚动
    var num = 0
    var circle = 0
    gonext.addEventListener('click',function(){
        if(num == ul.children.length - 1){
            ul.style.left = 0;
            num = 0
        }
        num++
        animate(ul, -num * 800)
        //8.点击右侧小圆圈变 声明一个变量来控制
        circle++
        //if circle=个数 说明走到最后清零
        if(circle == 4){
        circle = 0
        }
        //排他 清除样式
        for(let i = 0; i < ol.children.length; i++){
            ol.children[i].className = ''
        }
        //留下当前的类名
        ol.children[circle].className = 'active'
    })

    //左侧按钮
    goon.addEventListener('click',function(){
        if(num == 0){
            num = ul.children.length - 1
            ul.style.left = -num * 800 + 'px'
        }
        num--
        animate(ul, -num * 800)
        //8.点击右侧小圆圈变 声明一个变量来控制
        circle--
        //if circle< 0 说明第一张图片 小圆圈改4
        if(circle < 0){
        circle = ol.children.length -1
        }
        //排他 清除样式
        for(let i = 0; i < ol.children.length; i++){
            ol.children[i].className = ''
        }
        //留下当前的类名
        ol.children[circle].className = 'active'
    })
    //10.自动播放
    var timer = setInterval(function(){
        //手动调用点击事件
        gonext.click()
    },2000)
    
})
  }
//轮播图函数
  // lbt(){
    
  // }
  
}
