import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { WorddataService } from './services/worddata.service';
//y引入f
import { SerchService } from './services/serch.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { AdminComponent } from './admino/admin/admin.component';
import { RegisterComponent } from './register&login/register/register.component';
import { LoginComponent } from './register&login/login/login.component';
import { NoneComponent } from './word/none/none.component';
import { NtwoComponent } from './word/ntwo/ntwo.component';
import { NthreeComponent } from './word/nthree/nthree.component';
import { NfourComponent } from './word/nfour/nfour.component';
import { NfiveComponent } from './word/nfive/nfive.component';
import { HotComponent } from './moduleo-tuijian/hot/hot.component';
import { DayjuComponent } from './moduleo-tuijian/dayju/dayju.component';
import { RecommendComponent } from './moduleo-tuijian/recommend/recommend.component';
import { LeftComponent } from './home-page/left/left.component';
import { RightComponent } from './home-page/right/right.component';
import { PageComponent } from './home-page/page/page.component';
import { RotationComponent } from './home-page/rotation/rotation.component';
import { GrammerOneComponent } from './grammer/grammer-one/grammer-one.component';
import { GrammerTwoComponent } from './grammer/grammer-two/grammer-two.component';
import { GrammerThreeComponent } from './grammer/grammer-three/grammer-three.component';
import { GrammerForeComponent } from './grammer/grammer-fore/grammer-fore.component';
import { GrammerFiveComponent } from './grammer/grammer-five/grammer-five.component';
import { HeadComponent } from './head/head/head.component';
import { LoveComponent } from './movie/love/love.component';
import { CartoonComponent } from './movie/cartoon/cartoon.component';
import { ActionComponent } from './movie/action/action.component';

import { UserAdminComponent } from './admino/admin/user-admin/user-admin.component';
import { WordAdminComponent } from './admino/admin/word-admin/word-admin.component';
import { GrammerAdminComponent } from './admino/admin/grammer-admin/grammer-admin.component';
import { SingComponent } from './sing/sing/sing.component';
import { MychatComponent } from './home-page/left/mychat/mychat.component';
import { PublicComponent } from './moduleo-tuijian/recommend/public/public.component';
import { WordTwoComponent } from './home-page/left/word-two/word-two.component';
import { WordThreeComponent } from './home-page/left/word-three/word-three.component';
import { WordForeComponent } from './home-page/left/word-fore/word-fore.component';
import { WordFiveComponent } from './home-page/left/word-five/word-five.component';
import { ProgramLeftComponent } from './home-page/program-left/program-left.component';
import { ProOneComponent } from './home-page/program-left/pro-one/pro-one.component';
import { ProTwoComponent } from './home-page/program-left/pro-two/pro-two.component';
import { ProThreeComponent } from './home-page/program-left/pro-three/pro-three.component';
import { ProForeComponent } from './home-page/program-left/pro-fore/pro-fore.component';
import { ProFiveComponent } from './home-page/program-left/pro-five/pro-five.component';
import { DayjuProComponent } from './moduleo-tuijian/dayju-pro/dayju-pro.component';
import { WeixinComponent } from './weixin/weixin/weixin.component';
import { FashionComponent } from './music/fashion/fashion.component';
import { NewComponent } from './music/new/new.component';
import { SingerComponent } from './music/singer/singer.component';
import { SercherComponent } from './serch/sercher/sercher.component';
import { LbComponent } from './sing/sing/lb/lb.component';
//解决404问题text
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

// import { HttpClientModule } from '@angular/common/http';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    RegisterComponent,
    LoginComponent,
    NoneComponent,
    NtwoComponent,
    NthreeComponent,
    NfourComponent,
    NfiveComponent,
    HotComponent,
    DayjuComponent,
    RecommendComponent,
    LeftComponent,
    RightComponent,
    PageComponent,
    RotationComponent,
    GrammerOneComponent,
    GrammerTwoComponent,
    GrammerThreeComponent,
    GrammerForeComponent,
    GrammerFiveComponent,
    HeadComponent,
    LoveComponent,
    CartoonComponent,
    ActionComponent,
    UserAdminComponent,
    WordAdminComponent,
    GrammerAdminComponent,
    SingComponent,
    MychatComponent,
    PublicComponent,
    WordTwoComponent,
    WordThreeComponent,
    WordForeComponent,
    WordFiveComponent,
    ProgramLeftComponent,
    ProOneComponent,
    ProTwoComponent,
    ProThreeComponent,
    ProForeComponent,
    ProFiveComponent,
    DayjuProComponent,
    WeixinComponent,
    FashionComponent,
    NewComponent,
    SingerComponent,
    SercherComponent,
    LbComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    // forRoot() 配置方法接收一个 InMemoryDataService 类来初始化内存数据库。
    // HttpClientInMemoryWebApiModule.forRoot(
    //   WorddataService, { dataEncapsulation: false }
    // )
  ],
  providers: [
    SerchService,
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
