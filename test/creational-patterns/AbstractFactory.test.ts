import { AbstractFactory } from '../../src/creational-patterns/AbstractFactory.class';
import { CustomObject } from '../../src/CustomObject.class';
import { customData } from '../../src/customData';

describe('Abstract Factory', () => {
  test('An Abstract Factory creates standardized factories.', () => {
    const factory = AbstractFactory.createFactory(CustomObject);
    const customObject = factory.create(customData);

    expect(customObject.data).toBe(customData);
  });
});
