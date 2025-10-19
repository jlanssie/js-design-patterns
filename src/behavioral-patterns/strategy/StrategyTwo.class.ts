import { IStrategy } from './IStrategy.interface';

/**
 * Class representing a concrete strategy in a Strategy pattern.
 */
export class StrategyTwo implements IStrategy {
  method(data: any): any {
    return { ...data, strategy: this.constructor.name };
  }
}
