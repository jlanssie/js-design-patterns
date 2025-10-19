import { IThirdPartyInterface } from '../helpers/IThirdPartyInterface.interface';

/**
 * Class representing a Bridge pattern.
 */
export class Bridge {
  thirdPartyData: any;

  constructor(thirdPartyData: IThirdPartyInterface) {
    this.thirdPartyData = thirdPartyData.method();
  }

  method = (): any => {
    return this.thirdPartyData;
  };
}
