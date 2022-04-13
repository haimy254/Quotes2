export class Quote {
  public showauthor: boolean;

  showinfor: boolean;
  like: number;
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public completeDate: Date,
    public upVote: number,
    public downVote: number
  ) {
    this.showauthor = false;
  }
}
