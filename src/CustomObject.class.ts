import { customData } from './customData';

export class CustomObject {
  data: any;

  constructor(data: any = null) {
    this.data = data;
  }

  method(): any {
    return customData;
  }
}
