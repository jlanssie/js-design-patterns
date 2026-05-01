import { Handler } from './Handler.class';

/**
 * Class representing a concrete handler in a Chain of Responsibility pattern.
 */
export class HandlerOne extends Handler {
  constructor() {
    super();
  }

  handle(request: any): any {
    if (request === '1') {
      return `Handled by ${this.constructor.name}`;
    } else {
      return null;
    }
  }
}
