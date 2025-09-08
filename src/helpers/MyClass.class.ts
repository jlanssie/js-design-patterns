import { myObject } from './myData';
import { MyInterface } from './MyInterface';

export class MyClass implements MyInterface {
  data: any;

  constructor(data: any = myObject) {
    this.data = data;
  }

  method(): any {
    return myObject;
  }
}
