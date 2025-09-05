import { CustomObject } from '../../src/CustomObject.class';
import { Factory } from '../../src/creational-patterns/Factory.class';

describe('Factory', () => {
  test('A factory creates standardized objects.', () => {
    const factory = new Factory(CustomObject);
    const product = factory.create('Data');

    expect(product.data).toBe('Data');
  });

  test('An empty factory creates empty products.', () => {
    const factory = new Factory();
    const product = factory.create('Data');

    expect(product).toBeUndefined();
  });

  test('A faulty factory creates empty products.', () => {
    // @ts-ignore
    jest.spyOn(console, 'error').mockImplementation();

    const factory = new Factory('InvalidProduct');
    const product = factory.create('Product One');

    expect(product).toBeUndefined();
    expect(console.error).toHaveBeenCalledWith(
      expect.stringContaining('Error. Faulty product class for factory.'),
    );
  });
});
