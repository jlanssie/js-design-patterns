import { ExtendedPrototype } from '../../src/creational-patterns/Prototype.class';
import { myObject } from '../../src/helpers/myData';

describe('Prototype', () => {
  test('Prototype should create new objects by using an existing instance as a blueprint, allowing the new object to inherit state and behavior from the prototypical instance.', () => {
    const object: any = {};

    // The prototypical instance serves as the "model" for new objects
    const prototypeObject = {
      data: myObject,
      method: () => myObject,
    };

    // Establishing the prototype link allows the object to "clone" the behavior of the prototype
    Object.setPrototypeOf(object, prototypeObject);

    expect(object.data).toBe(myObject);
    expect(object.method()).toBe(myObject);
  });

  test('Prototype should allow for the dynamic creation of objects by cloning a pre-configured prototypical instance, avoiding the overhead of standard constructor-based initialization.', () => {
    const prototypeObject = {
      data: myObject,
      method: () => myObject,
    };

    // Object.create effectively clones the structure of the prototype into a new instance
    const object = Object.create(prototypeObject);

    expect(object.data).toBe(myObject);
    expect(object.method()).toBe(myObject);
  });

  test('Prototype should support a class-based hierarchy where subclasses inherit and extend the prototypical behavior of their parent instances.', () => {
    // ExtendedPrototype acts as a concrete prototype that specializes the base prototype's behavior
    const object: ExtendedPrototype = new ExtendedPrototype();

    expect(object.data).toBe(myObject);
    expect(object.method()).toBe(myObject);
  });
});
