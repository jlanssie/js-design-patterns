import { AbstractFactory } from '../../src/creational-patterns/AbstractFactory.class';
import { CustomObject } from '../../src/CustomObject.class';

describe('Abstract Factory', () => {
  test('An Abstract Factory creates standardized factories.', () => {
    const factory = AbstractFactory.createFactory(CustomObject);
    const customObject = factory.create('Data');

    expect(customObject.data).toBe('Data');
  });
});
