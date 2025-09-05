import { AbstractFactory } from '../../src/creational-patterns/AbstractFactory.class';
import { Product } from '../../src/Product.class';

afterEach(() => {
  jest.restoreAllMocks();
});

describe('Abstract Factory', () => {
  test('An Abstract Factory creates standardized factories.', () => {
    const productFactory = AbstractFactory.createFactory(Product);

    const product = productFactory.createProduct('Product One');
    product.data = 'Product One!';

    expect(product.data).toBe('Product One!');
    expect(product.factoryData).toEqual({ createdBy: 'ProductFactory' });
  });
});
