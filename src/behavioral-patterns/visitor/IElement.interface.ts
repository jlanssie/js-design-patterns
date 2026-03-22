import { IVisitor } from './IVisitor.interface';

export interface IElement {
  getValue(): any;
  accept(visitor: IVisitor): any;
}
