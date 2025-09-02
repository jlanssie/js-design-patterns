/**
 * Class representing a singleton pattern.
 * Inspired by [Tomasz Buszewski's article on JavaScript Singletons](https://dev.to/tomekbuszewski/singleton-in-javascript-1d5i).
 */
export class Singleton {
  static instance: any;
  readonly immutableData: any;
  data: any;

  constructor(immutableData: any = null) {
    if (Singleton.instance) {
      return Singleton.instance;
    }

    Singleton.instance = this;
    this.immutableData = immutableData;
    return this;
  }
}
