import { Factory, Product } from '../src/factory';

describe('Factory', () => {
  test('A factory creates standardized products.', () => {
    const product = Factory.create('Product One');
    product.setData('Product One!');

    expect(product.getData()).toBe('Product One!');
    expect(product.getFactoryData()).toEqual({ createdBy: 'Factory' });
  });
});

describe('Product', () => {
  test('A product can be created with empty data.', () => {
    const product = new Product();

    expect(product.getData()).toBeNull();
    expect(product.getFactoryData()).toBeNull();
  });

  test('A product can be created with data and empty factory data.', () => {
    const product = new Product('Object One');

    expect(product.getData()).toBe('Object One');
    expect(product.getFactoryData()).toBeNull();
  });

  test('A product can be created with data.', () => {
    const product = new Product('Object One', {
      createdBy: 'custom',
    });

    expect(product.getData()).toBe('Object One');
    expect(product.getFactoryData()).toEqual({ createdBy: 'custom' });
  });
});
