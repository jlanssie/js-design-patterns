import { IElement } from './IElement.interface';
import { thirdPartyNumber } from '../../helpers/thirdPartyData';
import { IVisitor } from './IVisitor.interface';

export class ElementTwo implements IElement {
  readonly value: number = thirdPartyNumber;

  getValue(): number {
    return this.value;
  }

  accept(visitor: IVisitor): any {
    return visitor.visit(this);
  }
}
