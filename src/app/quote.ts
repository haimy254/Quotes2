export class Quote {
  public showauthor: boolean;
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public completeDate: Date,
    public upVote: number,
    public downVote:number,
    public totalvote: number,
  ) {
    this.showauthor = false;
  }
  
}
