import { myObject } from './myData';

export class myClass {
  data: any;

  constructor(data: any = myObject) {
    this.data = data;
  }

  method(): any {
    return myObject;
  }
}
