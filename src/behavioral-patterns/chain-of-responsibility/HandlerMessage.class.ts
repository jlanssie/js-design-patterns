import { MyClass } from '../../helpers/MyClass.class';
import { IHandlerSignature } from './IHandlerSignature.interface';

export class HandlerMessageDTO {
  payload: MyClass;
  metadata: IHandlerSignature[];

  constructor() {
    this.payload = new MyClass();
    this.metadata = [];
  }
}
