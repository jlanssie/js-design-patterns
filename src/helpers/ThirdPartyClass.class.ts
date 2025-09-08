import { thirdPartyObject } from './thirdPartyData';

export class ThirdPartyClass {
  data: any;

  constructor(data: any = thirdPartyObject) {
    this.data = data;
  }

  method(): any {
    return thirdPartyObject;
  }
}
