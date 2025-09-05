import { ExtendedPrototype } from '../../src/creational-patterns/Prototype.class';
import { customObject } from '../../src/customData';

describe('Prototype', () => {
  test("An object with a prototype inherits the prototype's values & methods.", () => {
    let object: any = {};

    const prototypeObject = {
      data: customObject,
      method: () => customObject,
    };

    Object.setPrototypeOf(object, prototypeObject);

    expect(object.data).toBe(customObject);
    expect(object.method()).toBe(customObject);
  });

  test("An object with a prototype inherits the prototype's values & methods.", () => {
    const prototypeObject = {
      data: customObject,
      method: () => customObject,
    };

    const object = Object.create(prototypeObject);

    expect(object.data).toBe(customObject);
    expect(object.method()).toBe(customObject);
  });

  test("An object whose class extends a prototype class inherits the prototype class' values & methods.", () => {
    const object: ExtendedPrototype = new ExtendedPrototype();

    expect(object.data).toBe(customObject);
    expect(object.method()).toBe(customObject);
  });
});
