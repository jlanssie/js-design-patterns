import { ExtendedPrototype } from '../../src/creational-patterns/Prototype.class';

describe('Prototype', () => {
  test("An object with a prototype inherits the prototype's values & methods.", () => {
    let object: any = {
      name: 'Test Object',
    };

    const prototypeObject = {
      data: 'I am a prototype value!',
      method: () => 'I am a prototype method!',
    };

    Object.setPrototypeOf(object, prototypeObject);

    expect(object.data).toBe('I am a prototype value!');
    expect(object.method()).toBe('I am a prototype method!');
    expect(object.name).toBe('Test Object');
  });

  test("An object with a prototype inherits the prototype's values & methods.", () => {
    const prototypeObject = {
      data: 'I am a prototype value!',
      method: () => 'I am a prototype method!',
    };

    const object = Object.create(prototypeObject);

    expect(object.data).toBe('I am a prototype value!');
    expect(object.method()).toBe('I am a prototype method!');
  });

  test("An object whose class extends a prototype class inherits the prototype class' values & methods.", () => {
    const object: ExtendedPrototype = new ExtendedPrototype();

    expect(object.data).toBe('I am a prototype value!');
    expect(object.method()).toBe('I am a prototype method!');
  });
});
