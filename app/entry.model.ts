export class Entry {
  public healthy: boolean = this.calories <= 300;
  constructor(
    public name: string,
    public details: string,
    public calories: number,
    public id: number) {}
}
