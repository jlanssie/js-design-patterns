import { Handler } from './Handler.class';

/**
 * Class representing a Handler for a Chain of Responsibility pattern.
 */
export class HandlerTwo extends Handler {
  constructor() {
    super();
  }

  process(request: any): any {
    if (request === '2') {
      return `Handled by ${this.constructor.name}`;
    } else {
      if (this.nextHandler) {
        return this.nextHandler.process(request);
      }
      return super.process(request);
    }
  }
}
