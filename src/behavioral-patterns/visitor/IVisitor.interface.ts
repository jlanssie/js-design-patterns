import { IElement } from './IElement.interface';

export interface IVisitor {
  visit(element: IElement): any;
}
