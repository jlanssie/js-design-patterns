import { myClass } from '../src/MyClass.class';
import { myObject } from '../src/myData';

describe('Custom Object', () => {
  test('A custom object can be created with empty data.', () => {
    const product = new myClass();

    expect(product.data).toBe(myObject);
  });

  test('A custom object can be created with data.', () => {
    const product = new myClass(myObject);

    expect(product.data).toBe(myObject);
    expect(product.method()).toBe(myObject);
  });
});
