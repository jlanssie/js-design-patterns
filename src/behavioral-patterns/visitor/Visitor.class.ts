import { IVisitor } from './IVisitor.interface';
import { IElement } from './IElement.interface';
import { ElementOne } from './ElementOne.class';
import { ElementTwo } from './ElementTwo.class';

export class Visitor implements IVisitor {
  visit(element: IElement): any {
    if (element instanceof ElementOne) {
      return element.getValue();
    }

    if (element instanceof ElementTwo) {
      return element.getValue();
    }
  }
}
