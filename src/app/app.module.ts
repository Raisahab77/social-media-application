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
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AboutMeComponent } from './about-me/about-me.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftNavComponent,
    FeedComponent,
    RightSectionComponent,
    InfoPopupFeedComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    AboutMeComponent,
    NotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatDialogModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
