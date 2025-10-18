import { myObject } from './myData';
import { MyInterface } from './IMyInterface.interface';

export class MyClass implements MyInterface {
  data: any;

  constructor(data: any = myObject) {
    this.data = data;
  }

  method(): any {
    return myObject;
  }
}
