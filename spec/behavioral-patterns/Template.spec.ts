import { Implementation } from '../../src/behavioral-patterns/template/Implementation.class';
import { myObject } from '../../src/helpers/myData';

describe('Template', () => {
  test('Template Method should define the invariant skeleton of an algorithm in a base class and allow subclasses to redefine specific steps without altering the overall structure.', () => {
    // The Implementation is a concrete subclass that fills in the "hooks" or abstract steps
    const implementation = new Implementation();

    // The templateMethod executes a fixed sequence of steps
    implementation.templateMethod(myObject);

    // The result reflects the specific behavior provided by the subclass
    // while following the structure enforced by the base class
    expect(implementation.getData()).toStrictEqual({
      privateData: myObject,
      publicData: myObject,
    });
  });
});
