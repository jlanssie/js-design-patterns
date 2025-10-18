/**
 * Interface for a handler in a Chain of Responsibility pattern.
 */
export interface IHandler {
  process(request: any): any;

  setNextHandler(handler: IHandler): any;
}
