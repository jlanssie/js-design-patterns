import { customObject } from './customData';

export class CustomObject {
  data: any;

  constructor(data: any = customObject) {
    this.data = data;
  }

  method(): any {
    return customObject;
  }
}
