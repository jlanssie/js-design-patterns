import { ElementOne } from '../../src/behavioral-patterns/visitor/ElementOne.class';
import { ElementTwo } from '../../src/behavioral-patterns/visitor/ElementTwo.class';
import { Visitor } from '../../src/behavioral-patterns/visitor/Visitor.class';
import { IElement } from '../../src/behavioral-patterns/visitor/IElement.interface';

describe('Visitor', () => {
  test('A Visitor executes a method for a collection of items.', () => {
    const elements: IElement[] = [new ElementOne(), new ElementTwo()];
    const visitor = new Visitor();

    let totalValue = 0;

    for (const element of elements) {
      totalValue = totalValue + element.accept(visitor);
    }

    expect(totalValue).toBe(66);
  });
});
