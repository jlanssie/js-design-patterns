import {
  AbstractFactory,
  Factory,
  Product,
} from '../src/AbstractFactory.class';

afterEach(() => {
  jest.restoreAllMocks();
});

describe('Abstract Factory', () => {
  test('An Abstract Factory creates standardized factories.', () => {
    const productFactory = AbstractFactory.createFactory(Product);

    const product = productFactory.createProduct('Product One');
    product.setData('Product One!');

    expect(product.getData()).toBe('Product One!');
    expect(product.getFactoryData()).toEqual({ createdBy: 'ProductFactory' });
  });
});

describe('Factory', () => {
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
