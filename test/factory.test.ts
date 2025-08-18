import { Factory, FactoryObject } from '../src/factory';

describe('Factory', () => {
  test('A Factory creates standardized objects.', () => {
    const factory = new Factory();

    const factoryObject = factory.create('Factory Object One');
    factoryObject.setData('Factory Object One!');

    expect(factoryObject.getData()).toBe('Factory Object One!');
    expect(factoryObject.getFactoryData()).toEqual({ createdBy: 'Factory' });
  });
});

describe('Factory object', () => {
  test('A Factory object can be created with empty data.', () => {
    const factoryObject = new FactoryObject();

    expect(factoryObject.getData()).toBeNull();
    expect(factoryObject.getFactoryData()).toBeNull();
  });

  test('A Factory object can be created with data and empty factory data.', () => {
    const factoryObject = new FactoryObject('Object One');

    expect(factoryObject.getData()).toBe('Object One');
    expect(factoryObject.getFactoryData()).toBeNull();
  });

  test('A Factory object can be created with data.', () => {
    const factoryObject = new FactoryObject('Object One', {
      createdBy: 'custom',
    });

    expect(factoryObject.getData()).toBe('Object One');
    expect(factoryObject.getFactoryData()).toEqual({ createdBy: 'custom' });
  });
});
