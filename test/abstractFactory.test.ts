import { AbstractFactory, Factory, Product } from '../src/abstractFactory';

describe('Abstract Factory', () => {
  test('An Abstract Factory creates standardized factories.', () => {
    const productFactory = AbstractFactory.createFactory(Product);

    const product = productFactory.create('Product One');
    product.setData('Product One!');

    expect(product.getData()).toBe('Product One!');
    expect(product.getFactoryData()).toEqual({ createdBy: 'ProductFactory' });
  });
});

describe('Factory', () => {
  test('An empty factory creates empty products.', () => {
    const factory = new Factory();

    const product = factory.create('Product One');

    expect(product).toBeUndefined();
  });

  test('An faulty factory creates empty products.', () => {
    jest.spyOn(console, 'error').mockImplementation();

    const factory = new Factory('InvalidProduct');

    const product = factory.create('Product One');

    expect(product).toBeUndefined();
    expect(console.error).toHaveBeenCalledWith(
      expect.stringContaining('Error. Faulty product class for factory.'),
    );
  });

  test('A factory creates standardized products.', () => {
    const factory = new Factory(Product);

    const product = factory.create('Product One');
    product.setData('Product One!');

    expect(product.getData()).toBe('Product One!');
    expect(product.getFactoryData()).toEqual({ createdBy: 'ProductFactory' });
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
