import { myObject } from './myData';

export class MyClass {
  data: any;

  constructor(data: any = myObject) {
    this.data = data;
  }

  method(): any {
    return myObject;
  }
}
