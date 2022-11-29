import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../services/my-service.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor(private service:MyServiceService) { }
  url :any;
  file :File | any;
  profilePicture : any;
  result :any;
  userData = JSON.parse(sessionStorage.getItem('userData') || '{}');
  username = this.userData.username;
  ngOnInit(): void {
    this.getUserDetails()
  }

  onSelectFile(event:any){
    console.log(event)
    this.file = event.target.files[0];
    console.log(this.file)
    if(event.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
        // console.log(this.url);
      }
      
    }
    const formData = new FormData();
    formData.append('file',this.file);
    console.log(this.file);
    this.service.uploadProfile(this.username,formData).subscribe(response=>{
      console.log(response);
      // this.url = '';
    });
    this.getUserDetails()
  }

  getUserDetails(){
    this.service.loginService(this.username).subscribe((response)=>{
      console.log(response);
      sessionStorage.setItem('userData',JSON.stringify(response));
      this.result = response; 
      if (this.result!=null){
        this.profilePicture = this.result.profileImage;
        console.log(`The profile picture is ${this.profilePicture}`)
        if(this.profilePicture==undefined){
          this.url = '../../assets/male.png'
        }
        else{
          this.url = this.profilePicture;
        }
        console.log(`The url is ${this.url}`);
      }
    })
  }

}
