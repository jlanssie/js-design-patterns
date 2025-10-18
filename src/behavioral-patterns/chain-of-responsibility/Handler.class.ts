import { IHandler } from './IHandler.interface';

/**
 * Class representing a handler implementation in a Chain of Responsibility pattern.
 */
export class Handler implements IHandler {
  nextHandler: IHandler | null = null;

  // @ts-expect-error TS6133: request is declared but its value is never read.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  process(request: any): any {
    throw new Error('Could not process request');
  }

  setNextHandler(handler: IHandler): any {
    this.nextHandler = handler;
  }
}
