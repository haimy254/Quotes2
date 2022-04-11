export class Quote {
  public showauthor: boolean;
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public completeDate: Date
  ) {
    this.showauthor = false;
  }
}
