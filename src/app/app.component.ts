import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "test-project";

  constructor(private appservice: AppService) {

  }

  ngOnInit() {
    console.log('ONINIT');

    this.appservice.getUsers().subscribe(x => {
      console.log('INSIDE SUBSCRIBE');
      console.log(x);
    })
  }
}
