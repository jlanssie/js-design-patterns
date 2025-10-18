import { ThirdPartyInterface } from '../helpers/IThirdPartyInterface.interface';

/**
 * Class representing a Bridge pattern.
 */
export class Bridge {
  thirdPartyData: any;

  constructor(thirdPartyData: ThirdPartyInterface) {
    this.thirdPartyData = thirdPartyData.method();
  }

  method = (): any => {
    return this.thirdPartyData;
  };
}
