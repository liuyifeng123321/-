import { Component, OnInit } from '@angular/core';
import { SingService } from 'src/services/sing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;
}

