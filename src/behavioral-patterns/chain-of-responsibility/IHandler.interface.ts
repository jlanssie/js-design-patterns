export interface IHandler {
  process(request: any): any;

  setNextHandler(handler: IHandler): any;
}
