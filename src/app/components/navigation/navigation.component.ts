import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  isShow = "hidden"

  ngOnInit(): void {
  }

  onToggleMenu(){
    console.log(this.isShow)
    if(this.isShow === "hidden") {
      this.isShow = ""
    } else {
      this.isShow = "hidden"
    }
  }

}
