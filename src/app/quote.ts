export class Quote {
  public showauthor: boolean;
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public completeDate: Date,
    public quoteUpVote: number,
    public quoteDownVote:number,
    public totalvote: number,
  ) {
    this.showauthor = false;
  }
  
}
