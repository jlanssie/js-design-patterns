import { MyClass } from '../../src/helpers/MyClass.class';
import { Factory } from '../../src/creational-patterns/Factory.class';
import { myObject } from '../../src/helpers/myData';

describe('Factory', () => {
  test('An empty factory creates empty products.', () => {
    const factory = new Factory();
    const product = factory.create(myObject);

    expect(product).toBeUndefined();
  });

  test('A faulty factory creates empty products.', () => {
    jest.spyOn(console, 'error').mockImplementation();

    const factory = new Factory('InvalidProduct');
    const product = factory.create(myObject);

    expect(product).toBeUndefined();
    expect(console.error).toHaveBeenCalledWith(
      expect.stringContaining('Error. Faulty product class for factory.'),
    );
  });

  test('A factory creates standardized products.', () => {
    const factory = new Factory(MyClass);
    const product = factory.create(myObject);

    expect(product.data).toBe(myObject);
  });
});
