import { Product } from '../src/Product.class';

describe('Product', () => {
  test('A product can be created with empty data.', () => {
    const product = new Product();

    expect(product.data).toBeNull();
    expect(product.factoryData).toBeNull();
  });

  test('A product can be created with data and empty factory data.', () => {
    const product = new Product('Object One');

    expect(product.data).toBe('Object One');
    expect(product.factoryData).toBeNull();
  });

  test('A product can be created with data.', () => {
    const product = new Product('Object One', {
      createdBy: 'custom',
    });

    expect(product.data).toBe('Object One');
    expect(product.factoryData).toEqual({ createdBy: 'custom' });
  });

  test('A product can be created with empty data.', () => {
    const product = new Product();

    expect(product.data).toBeNull();
    expect(product.factoryData).toBeNull();
  });

  test('A product can be created with data and empty factory data.', () => {
    const product = new Product('Object One');

    expect(product.data).toBe('Object One');
    expect(product.factoryData).toBeNull();
  });

  test('A product can be created with data.', () => {
    const product = new Product('Object One', {
      createdBy: 'custom',
    });

    expect(product.data).toBe('Object One');
    expect(product.factoryData).toEqual({ createdBy: 'custom' });
  });
});
