import { IElement } from './IElement.interface';
import { myNumber } from '../../helpers/myData';
import { IVisitor } from './IVisitor.interface';

export class ElementOne implements IElement {
  readonly value: number = myNumber;

  getValue(): number {
    return this.value;
  }

  accept(visitor: IVisitor): any {
    return visitor.visit(this);
  }
}
