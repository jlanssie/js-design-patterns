import { HandlerMessageDTO } from './HandlerMessage.class';

/**
 * Interface for a handler in a Chain of Responsibility pattern.
 */
export interface IHandler {
  handle(request: HandlerMessageDTO): HandlerMessageDTO;

  setNextHandler(handler: IHandler): IHandler;
}
