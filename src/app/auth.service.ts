import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LogInData } from './model/logInData';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = false;
private readonly mockedUser = new LogInData('admin@gmail.com', '12345');

// loginUser(user:any)
// {
//   return this.http.post("http://localhost:3000/login",user)
//   .subscribe((data)=>{
//     console.log('success')
//   })
// }
  constructor(private http:HttpClient, private router:Router) { }

  authenticate(logInData:LogInData):boolean{
    if(this.checkCredentials(logInData)){
      this.isAuthenticated=true;
      this.router.navigate(['books'])
      return true;
    }
    this.isAuthenticated =false;
    return false
  }
  private checkCredentials(logInData:LogInData):boolean{
      return this.checkEmail(logInData.getEmail())&& this.checkPassword(logInData.getPassword());
  }

  private checkEmail(email:string):boolean{
    return email === this.mockedUser.getEmail();
  }

  private checkPassword(password:string):boolean{
    return password === this.mockedUser.getPassword();
  }

}
