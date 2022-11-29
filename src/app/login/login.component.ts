import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MyServiceService } from '../services/my-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  result:any;
  originalPassword:any;
  constructor(private service:MyServiceService, private router:Router) { }
  loginForm: FormGroup | any;
  isLoggedIn = false;
  
  ngOnInit(): void {
    if (this.service.isLoggedIn()){
      this.router.navigateByUrl('dashboard');
    }
    this.loginForm = new FormGroup({
      'username': new FormControl(''),
      'password': new FormControl('')
    })
  }

  getLoginData(){
    console.log(this.loginForm.value.username);
    this.service.loginService(this.loginForm.value.username).subscribe((response)=>{
      console.log(response);
      this.result = response;
      console.log(this.result);
      if(response!=null){
        this.originalPassword = this.result.password;
        console.log(this.originalPassword,this.loginForm.value.password)
        if (this.originalPassword===this.loginForm.value.password){
          this.service.userName = this.loginForm.value.username;
          this.router.navigateByUrl('/dashboard');
          // localStorage.setItem('username',this.loginForm.value.username)
          sessionStorage.setItem('userData',JSON.stringify(response));
          this.isLoggedIn = true;
          this.loginForm.reset();
        }
        else{
          console.log("invalid password")
        }
      }
      else{
        console.log("Invalid user Try signUp first");
      }
    })
    // this.router.navigateByUrl('/dashboard');
  }

}
