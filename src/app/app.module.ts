import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { FeedComponent } from './feed/feed.component';
import { RightSectionComponent } from './right-section/right-section.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfoPopupFeedComponent } from './info-popup-feed/info-popup-feed.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftNavComponent,
    FeedComponent,
    RightSectionComponent,
    InfoPopupFeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatDialogModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
