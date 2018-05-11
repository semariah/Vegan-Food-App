export class Food {
  public organic: boolean = false;
  constructor(public name: string, public ingredient: string, public diet: string, public calories: number, public method: string, public id: number) {}
}
