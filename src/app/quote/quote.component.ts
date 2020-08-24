// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-quote-box',
//   templateUrl: './quote-box.component.html',
//   styleUrls: ['./quote-box.component.css']
// })
// export class QuoteBoxComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
export class QuoteBoxComponent {
  showDescription: boolean;
  constructor(
    public id: number,
    public detail: string,
    public author: string,
    public upVote: number,
    public downVote: number,
    public dateCreated: Date,
    public originator: string
  ) {
    this.showDescription = false;
  }
}