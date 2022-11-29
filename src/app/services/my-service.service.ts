import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {


  public userName = String;
  public name = String;

  constructor(private http: HttpClient) { }


  // This will get data of all feeds in DB.
  getData() {
    return this.http.get(`http://localhost:3000/feed`)
  }


  upload(data:any,username:any){
    return this.http.post(`http://localhost:3000/newpost/${username}`, data)
  }

  signUpService(data:any){
    return this.http.post('http://localhost:3000/signup',data)
  }

  loginService(id:any){
    return this.http.get(`http://localhost:3000/login/${id}`)
  }
  like(id:any,like:any){
    console.log(like);
    // return this.http.post(`http://localhost:3000/like-post/raisahab`,like)
    return this.http.post(`http://localhost:3000/like-post/${id}`,like);
  }

  uploadProfile(userName:any,data:any){
    return this.http.post(`http://localhost:3000/add-profile-picture/${userName}`,data)
  }

  getProfilePicture(userName:any){
    return this.http.get(`http://localhost:3000/add-profile-picture/${userName}`)
  }

  isLoggedIn(){
    let userData = sessionStorage.getItem('userData');
    if (userData!=null){
      return true;
    }
    else{
      return false;
    }
  }

  getAllUser() {
    return this.http.get(`http://localhost:3000/get-all-users`)
  }
}

