import { Component } from '@angular/core';
import { AuthenticationService } from './authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'news';

  constructor(public authenticationService: AuthenticationService){

  }

  /**constructor(){
    const routes:Routes=[
      {path:"login", component:LoginComponent},
      {path:"news", component:NewsComponent}
    ]
  } **/
  
}
