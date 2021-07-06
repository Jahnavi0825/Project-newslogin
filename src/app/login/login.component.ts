import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailFormGroup : FormGroup;
  constructor(private authenticationService : AuthenticationService) { 
    this.emailFormGroup=new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email])
      })

   }

   hide = true;
  }
  function openNewTab() {
    throw new Error('Function not implemented.');

    
}

