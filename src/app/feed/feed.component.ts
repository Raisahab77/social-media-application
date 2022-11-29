import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { read } from '@popperjs/core';
import { InfoPopupFeedComponent } from '../info-popup-feed/info-popup-feed.component';
import { MyServiceService } from '../services/my-service.service';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(private dialog: MatDialog, private service:MyServiceService) { }


  

  feeds:any;
  url = "";
  file :File | any;
  result:any;
  base64textString = [];
  userData = JSON.parse(sessionStorage.getItem('userData') || '{}');
  username = this.userData.username;
  profileImage = this.userData.profileImage;
  
  // description = "";
  newPostDescription:FormGroup |any;
  ngOnInit(){
    console.log(`The value of Url Is ${this.url}`);
    this.getDataFromApi()                    // get feed data on onload of feed component
    this.newPostDescription = new FormGroup({
      'description' : new FormControl()
    })
    
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
    
  }

  getDataFromApi(){
    this.service.getData().subscribe((response)=>{
      this.feeds = response;
      console.log(response);

      for (var val of this.feeds) {
        // document.getElementById('feedPost') = this.base64textString.push('data:image/png;base64,' + btoa(e.target.result));
        // this.base64textString.push('data:image/png;base64,' + btoa(e.target.result));
      }
    },(error)=>{
      console.log('Error is',error);
    })
  }


  onCreatePostClick(){
    // console.log(this.newPostDescription.value);
    console.log("Button clicked");
    this.dialog.open(InfoPopupFeedComponent);
  }


  onUpload() {
    // console.log(this.newPostDescription.value.description);
    if (this.userData.profileImage==undefined){
      this.profileImage = '../../assets/male.png'
    }
    else{
      this.profileImage = this.userData.profileImage;
    }
    const formData = new FormData();
    formData.append('file',this.file);
    formData.append('description',this.newPostDescription.value.description);
    formData.append('profileImage',this.profileImage);
    console.log(this.newPostDescription.value,this.file);
    console.log(formData);
    this.service.upload(formData,this.username).subscribe(response=>{
      console.log(response);
      this.newPostDescription.reset();
      this.url = '';
      this.getDataFromApi() 
    });


}

  like(count:any,id:any){
    count = count+1;
    let likes = {
      'like' : count
    }
    // const formData = new FormData();
    // formData.append('like',"lauda")
    console.log(id,likes);
    this.service.like(id,likes).subscribe(response=>{
      console.log(response);
    });
    this.getDataFromApi();
  }

  // getProfilePicture(username:any){
  //   this.service.getProfilePicture(username).subscribe(response=>{
  //     console.log(response);
  //   })
  // }

}