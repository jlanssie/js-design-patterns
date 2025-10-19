import { myObject } from './myData';
import { IMyInterface } from './IMyInterface.interface';

export class MyClass implements IMyInterface {
  data: any;

  constructor(data: any = myObject) {
    this.data = data;
  }

  method(): any {
    return myObject;
  }
}
