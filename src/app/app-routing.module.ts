import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admino/admin/admin.component';
  import { UserAdminComponent } from './admino/admin/user-admin/user-admin.component';
  import { WordAdminComponent } from './admino/admin/word-admin/word-admin.component';
  import { GrammerAdminComponent } from './admino/admin/grammer-admin/grammer-admin.component';
import { LoginComponent } from './register&login/login/login.component';
import { RegisterComponent } from './register&login/register/register.component';
import { PageComponent } from './home-page/page/page.component';
// 单词路由
import { NoneComponent } from './word/none/none.component';
import { NtwoComponent } from './word/ntwo/ntwo.component';
import { NthreeComponent } from './word/nthree/nthree.component';
import { NfourComponent } from './word/nfour/nfour.component';
import { NfiveComponent } from './word/nfive/nfive.component';
  import{ WordTwoComponent } from './home-page/left/word-two/word-two.component';
  import{ WordThreeComponent } from './home-page/left/word-three/word-three.component';
  import{ WordForeComponent } from './home-page/left/word-fore/word-fore.component';
  import{ WordFiveComponent } from './home-page/left/word-five/word-five.component';
// 语法路由
import { GrammerOneComponent } from './grammer/grammer-one/grammer-one.component';
import { GrammerTwoComponent } from './grammer/grammer-two/grammer-two.component';
import { GrammerThreeComponent } from './grammer/grammer-three/grammer-three.component';
import { GrammerForeComponent } from './grammer/grammer-fore/grammer-fore.component';
import { GrammerFiveComponent } from './grammer/grammer-five/grammer-five.component';
  import { ProFiveComponent } from './home-page/program-left/pro-five/pro-five.component';
  import { ProForeComponent } from './home-page/program-left/pro-fore/pro-fore.component';
  import { ProThreeComponent } from './home-page/program-left/pro-three/pro-three.component';
  import { ProTwoComponent } from './home-page/program-left/pro-two/pro-two.component';
  
//sing
import { SingComponent } from './sing/sing/sing.component';
//公众号
import { ProgramLeftComponent } from './home-page/program-left/program-left.component';
import { LeftComponent } from './home-page/left/left.component';
  import { MychatComponent } from './home-page/left/mychat/mychat.component';
// import { RecommendComponent } from './moduleo-tuijian/recommend/recommend.component';
//   import { PublicComponent } from './moduleo-tuijian/recommend/public/public.component';
//movie 
//通过api获取数据的页面
import { FashionComponent } from './music/fashion/fashion.component';
import { NewComponent } from './music/new/new.component';
import { SingerComponent } from './music/singer/singer.component';
import { ActionComponent } from './movie/action/action.component'
import { from } from 'rxjs';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  
  { path: 'page', component: PageComponent },
  { 
    path: 'admin', component: AdminComponent, 
    children:[
      { path: 'userAdmin', component: UserAdminComponent},
      { path: 'woreAdmin', component: WordAdminComponent},
      {path: 'grammerAdmin', component: GrammerAdminComponent}
    ]
  },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'word-one', component: NoneComponent},
  { path: 'word-two', component: NtwoComponent},
  { path: 'word-three', component: NthreeComponent},
  { path: 'word-four', component: NfourComponent},
  { path: 'word-five', component: NfiveComponent},
  // 语法部分
  { path: 'grammer-one', component: GrammerOneComponent},
  { path: 'grammer-two', component: GrammerTwoComponent},
  { path: 'grammer-three', component: GrammerThreeComponent},
  { path: 'grammer-fore', component: GrammerForeComponent},
  { path: 'grammer-five', component: GrammerFiveComponent},
  //movie
  { path: 'action', component: ActionComponent},
  //sing
  { path: 'sing', component: SingComponent},
  //公众号
 
  { 
    path: 'left', component: LeftComponent, 
    children:[
      { path: 'mychat', component: MychatComponent},
      { path: 'N-TWO', component: WordTwoComponent},
      { path: 'N-THREE', component: WordThreeComponent},
      { path: 'N-FORE', component: WordForeComponent},
      { path: 'N-FIVE', component: WordFiveComponent},
    ]
  },
  //语法子路由  父子路由实例
  {
    path: 'pro-left', component: ProgramLeftComponent,
    children:[
      {path: 'pro-five', component: ProFiveComponent},
      {path: 'pro-fore', component: ProForeComponent},
      {path: 'pro-three', component: ProThreeComponent},
      {path: 'pro-two', component: ProTwoComponent},
      
    ]
  },
  //通过api获取数据的页面
  {path: 'fashion', component: FashionComponent},
  {path: 'new', component: NewComponent},
  {path: 'singer', component: SingerComponent},
  // 匹配不到路由时
  { path: '**', redirectTo: 'page'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
