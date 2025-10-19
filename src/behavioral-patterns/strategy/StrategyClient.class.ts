import { myObject } from '../../helpers/myData';
import { IStrategy } from './IStrategy.interface';

/**
 * Class representing a concrete strategy in a Strategy pattern.
 */
export class StrategyClient {
  getData() {
    return myObject;
  }

  method(strategy: IStrategy) {
    const data = this.getData();
    return strategy.method(data);
  }
}
