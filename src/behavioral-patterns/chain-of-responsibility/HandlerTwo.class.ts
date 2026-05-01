import { Handler } from './Handler.class';
import { MyClass } from '../../helpers/MyClass.class';

/**
 * Class representing a concrete handler in a Chain of Responsibility pattern.
 */
export class HandlerTwo extends Handler {
  constructor() {
    super();
  }

  process(input: MyClass): MyClass {
    input.data = `Handled by ${this.constructor.name}`;
    return input;
  }
}
