import { ElementOne } from '../../src/behavioral-patterns/visitor/ElementOne.class';
import { ElementTwo } from '../../src/behavioral-patterns/visitor/ElementTwo.class';
import { Visitor } from '../../src/behavioral-patterns/visitor/Visitor.class';
import { IElement } from '../../src/behavioral-patterns/visitor/IElement.interface';

describe('Visitor', () => {
  test('Visitor should allow defining new operations for an object structure without modifying the classes of the elements being operated on.', () => {
    // The object structure contains various types of elements
    const elements: IElement[] = [new ElementOne(), new ElementTwo()];

    // The Visitor encapsulates a specific logic or algorithm that can be applied to all elements
    const visitor = new Visitor();

    let totalValue = 0;

    // The 'accept' method performs double dispatch, ensuring the Visitor executes
    // the correct operation specific to each concrete element type.
    for (const element of elements) {
      totalValue = totalValue + element.accept(visitor);
    }

    // The operation results in a value derived from disparate element types
    // without having added 'calculate' methods directly to ElementOne or ElementTwo.
    expect(totalValue).toBe(66);
  });
});
