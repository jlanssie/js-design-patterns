import { IHandler } from './IHandler.interface';

/**
 * Class representing a handler implementation in a Chain of Responsibility pattern.
 */
export abstract class Handler implements IHandler {
  nextHandler: IHandler | null = null;

  protected abstract handle(request: any): any | null;

  process(request: any): any {
    const response = this.handle(request);

    if (response !== null) {
      return response;
    }

    if (this.nextHandler) {
      return this.nextHandler.process(request);
    }

    throw new Error('Could not process request');
  }

  setNextHandler(handler: IHandler): IHandler {
    this.nextHandler = handler;
    return handler;
  }
}
