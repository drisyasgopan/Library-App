import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    user={email:'',
      password:''};

      constructor(private _auth:AuthService) {}
      
      ngOnInit(): void {
        
      }
      onSubmit(logInForm:NgForm){
        console.log(logInForm.value);
      }
  

}
