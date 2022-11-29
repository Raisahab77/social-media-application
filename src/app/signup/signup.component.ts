import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyServiceService } from '../services/my-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registrationForm: FormGroup | any;
  constructor(private service:MyServiceService, private router:Router) { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      'name': new FormControl('',[Validators.required,Validators.minLength(3)]),
      'username': new FormControl('',[Validators.required,Validators.pattern("[a-z,A-Z,0-9,_,-]*")]),
      'countrycode': new FormControl("india",[Validators.required]),
      'mobile':new FormControl('',[Validators.required]),
      'email':new FormControl('',[Validators.required,Validators.email]),
      'gender': new FormControl('',Validators.required),
      'dob': new FormControl('',[Validators.required]),
      'password': new FormControl('',[Validators.required,this.passwordValidation]),
      'confirmPassword': new FormControl('',[Validators.required,this.mustMatch]),
      'checkbox': new FormControl('',Validators.required)
    })
  }
  postRegistrationData(){
    console.log(this.registrationForm);
    // let data = this.registrationForm.value;
    // this.service.signUpService(this.registrationForm.value).subscribe((result)=>{
    //   console.log("Data post from service",result);
    // })
    // this.router.navigateByUrl('/');
    
  }
  get registerFormControl() {
    return this.registrationForm.controls;
  }

  passwordValidation(control: FormControl){
    let password = control.value;
    var re = new RegExp("[a-z,A-Z,0-9,_,-]*");
    // console.log(pass)
    if(password.length >=8 && password.length<=16){
      if(re.test(password)){
        return null;
      }
      else{
        return {regexError:true}
      }
      
    }
    else{
      console.log("In else part")
      return {lengthError:true}
    }
  }

  mustMatch(control:FormControl){
    let password = control.get("password")?.value;
    console.log(password);
    let confirmPassword = control.value;
    if (password===confirmPassword){
      return null;
    }
    else{
      return {mustMatch:true}
    }
  }
}
