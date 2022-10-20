import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  display = false;
  nav = false;
  isOpend = false;
  burger = false;
  burgerClick(){
    // console.log(this.display);
    this.display = !this.display;
    this.nav = !this.nav;
    this.isOpend = !this.isOpend;
    this.burger = !this.burger;
    console.log(this.display);
    }
    
    theme = false;
    day = false;
    night =true;
    toggle_color(){
      document.body.classList.toggle("dark-theme");
      this.theme = !this.theme;
      this.day = !this.day;
      this.night = !this.night;
    }
}