import { ExtendedPrototype } from '../../src/creational-patterns/Prototype.class';
import { myObject } from '../../src/helpers/myData';

describe('Prototype', () => {
  test("An object with a prototype inherits the prototype's values & methods.", () => {
    let object: any = {};

    const prototypeObject = {
      data: myObject,
      method: () => myObject,
    };

    Object.setPrototypeOf(object, prototypeObject);

    expect(object.data).toBe(myObject);
    expect(object.method()).toBe(myObject);
  });

  test("An object with a prototype inherits the prototype's values & methods.", () => {
    const prototypeObject = {
      data: myObject,
      method: () => myObject,
    };

    const object = Object.create(prototypeObject);

    expect(object.data).toBe(myObject);
    expect(object.method()).toBe(myObject);
  });

  test("An object whose class extends a prototype class inherits the prototype class' values & methods.", () => {
    const object: ExtendedPrototype = new ExtendedPrototype();

    expect(object.data).toBe(myObject);
    expect(object.method()).toBe(myObject);
  });
});
