import { IElement } from './IElement.interface';
import { myNumber } from '../../helpers/myData';

export class ElementOne implements IElement {
  private readonly value: number = myNumber;

  getValue(): number {
    return this.value;
  }

  accept(visitor: any): any {
    return visitor.visit(this);
  }
}
