import { thirdPartyObject } from './thirdPartyData';
import { ThirdPartyInterface } from './ThirdPartyInterface';

export class ThirdPartyClass implements ThirdPartyInterface {
  data: any;

  constructor(data: any = thirdPartyObject) {
    this.data = data;
  }

  method(): any {
    return thirdPartyObject;
  }
}
