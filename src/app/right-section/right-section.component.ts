import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../services/my-service.service';

@Component({
  selector: 'app-right-section',
  templateUrl: './right-section.component.html',
  styleUrls: ['./right-section.component.css']
})
export class RightSectionComponent implements OnInit {

  allUserData : any;
  constructor(private service:MyServiceService) { }

  ngOnInit(): void {
    this.getAllUserData()
  }

  getAllUserData(){
    this.service.getAllUser().subscribe(response=>{
      console.log(response);
      this.allUserData =  response;
    })
  }

}
