import { IHandler } from './IHandler.interface';
import { MyClass } from '../../helpers/MyClass.class';
import { HandlerMessageDTO } from './HandlerMessage.class';
import { IHandlerSignature } from './IHandlerSignature.interface';

/**
 * Class representing a handler implementation in a Chain of Responsibility pattern.
 */
export abstract class Handler implements IHandler {
  nextHandler: IHandler | null = null;

  protected abstract process(request: MyClass): MyClass;

  handle(request: HandlerMessageDTO): HandlerMessageDTO {
    const currentHandlerResult = this.process(request.payload);

    const currentHandlerSignature: IHandlerSignature = {
      name: this.constructor.name,
      timestamp: new Date(),
    };

    const updatedHandlerMessage: HandlerMessageDTO = {
      payload: currentHandlerResult,
      metadata: [...request.metadata, currentHandlerSignature],
    };

    if (this.nextHandler) {
      return this.nextHandler.handle(updatedHandlerMessage);
    }

    return updatedHandlerMessage;
  }

  setNextHandler(handler: IHandler): IHandler {
    this.nextHandler = handler;
    return handler;
  }
}
