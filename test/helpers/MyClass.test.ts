import { MyClass } from '../../src/helpers/MyClass.class';
import { myObject } from '../../src/helpers/myData';

describe('MyClass', () => {
  test('An object can be created with empty data.', () => {
    const object = new MyClass();

    expect(object.data).toBe(myObject);
  });

  test('An object can be created with data.', () => {
    const object = new MyClass(myObject);

    expect(object.data).toBe(myObject);
    expect(object.method()).toBe(myObject);
  });
});
