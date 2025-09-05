import { AbstractFactory } from '../../src/creational-patterns/AbstractFactory.class';
import { CustomObject } from '../../src/CustomObject.class';
import { customObject } from '../../src/customData';

describe('Abstract Factory', () => {
  test('An Abstract Factory creates standardized factories.', () => {
    const factory = AbstractFactory.createFactory(CustomObject);
    const product = factory.create(customObject);

    expect(product.data).toBe(customObject);
  });
});
