import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InfoPopupFeedComponent } from '../info-popup-feed/info-popup-feed.component';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  onCreatePostClick(){
    console.log("Button clicked");
    this.dialog.open(InfoPopupFeedComponent);
  }
}