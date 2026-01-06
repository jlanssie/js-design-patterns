import { IElement } from './IElement.interface';
import { thirdPartyNumber } from '../../helpers/thirdPartyData';

export class ElementTwo implements IElement {
  private readonly value: number = thirdPartyNumber;

  getValue(): number {
    return this.value;
  }

  accept(visitor: any): any {
    return visitor.visit(this);
  }
}
