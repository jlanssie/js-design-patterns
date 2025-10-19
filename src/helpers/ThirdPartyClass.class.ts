import { thirdPartyObject } from './thirdPartyData';
import { IThirdPartyInterface } from './IThirdPartyInterface.interface';

export class ThirdPartyClass implements IThirdPartyInterface {
  data: any;

  constructor(data: any = thirdPartyObject) {
    this.data = data;
  }

  method(): any {
    return thirdPartyObject;
  }
}
