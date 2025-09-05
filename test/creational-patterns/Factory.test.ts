import { Product } from '../../src/Product.class';
import { Factory } from '../../src/creational-patterns/Factory.class';

describe('Factory', () => {
  test('A factory creates standardized products.', () => {
    const factory = new Factory(Product);
    const product = factory.createProduct('Product One');
    product.data = 'Product One!';

    expect(product.data).toBe('Product One!');
    expect(product.factoryData).toEqual({ createdBy: 'ProductFactory' });
  });

  test('An empty factory creates empty products.', () => {
    const factory = new Factory();

    const product = factory.createProduct('Product One');

    expect(product).toBeUndefined();
  });

  test('A faulty factory creates empty products.', () => {
    // @ts-ignore
    jest.spyOn(console, 'error').mockImplementation();

    const factory = new Factory('InvalidProduct');

    const product = factory.createProduct('Product One');

    expect(product).toBeUndefined();
    expect(console.error).toHaveBeenCalledWith(
      expect.stringContaining('Error. Faulty product class for factory.'),
    );
  });

  test('A factory creates standardized products.', () => {
    const factory = new Factory(Product);

    const product = factory.createProduct('Product One');
    product.data = 'Product One!';

    expect(product.data).toBe('Product One!');
    expect(product.factoryData).toEqual({ createdBy: 'ProductFactory' });
  });
});
