export class Singleton {
  private static instance: any;
  private data: any;

  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }

    Singleton.instance = this;
    return this;
  }

  getData(): any {
    return this.data;
  }

  setData(data: any): void {
    this.data = data;
  }
}
