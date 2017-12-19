import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-creation-page',
  templateUrl: './blog-creation-page.component.html',
  styleUrls: ['./blog-creation-page.component.css']
})
export class BlogCreationPageComponent implements OnInit {

  title: string;
  layout: string;
  font: string;
  color: any;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.title, this.layout, this.font, this.color);
  }

  isReadyForSubmit(){
    return this.title && this.layout && this.font && this.color;
  }

}
