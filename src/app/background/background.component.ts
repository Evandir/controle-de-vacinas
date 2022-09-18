import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {

  backgroundImageUrl! : String;

  constructor() { }

  ngOnInit(): void {
    this.backgroundImageUrl = "assets/resources/images/imagembackground1.jpg";
  }

}
