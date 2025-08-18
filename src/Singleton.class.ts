/**
 * Class representing a singleton pattern.
 * Inspired by [Tomasz Buszewski's article on JavaScript Singletons](https://dev.to/tomekbuszewski/singleton-in-javascript-1d5i).
 */
export class Singleton {
  private static instance: any;
  private readonly immutableData: any;
  private data: any;

  constructor(immutableData: any = null) {
    if (Singleton.instance) {
      return Singleton.instance;
    }

    Singleton.instance = this;
    this.immutableData = immutableData;
    return this;
  }

  getImmutableData(): any {
    return this.immutableData;
  }

  getData(): any {
    return this.data;
  }

  setData(data: any): void {
    this.data = data;
  }
}
