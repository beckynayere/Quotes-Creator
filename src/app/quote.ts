// export class Quote {
//     public quote:string;
//     public author:string;

//     constructor(quote: string,author:string){
//         this.quote =quote;
//         this.author =author;
//     }
// }


export class Quote {
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