import { Facade, SystemA, SystemB } from '../../src/structural-patterns/Facade.class';

describe('Facade', () => {
  test("A facade provides a single entry point for other systems' methods", () => {
    const facade = new Facade({});
    facade.method();

    expect(facade.data.systemA).toBe('SystemA method-value.');
    expect(facade.data.systemB).toBe('SystemB method-value.');
  });

  test("A facade provides a single entry point for other systems' internal data", () => {
    const facade = new Facade({});
    const aggregatedData = facade.aggregatedData();

    expect(aggregatedData).toEqual({
      systemAKey: 'SystemA key-value.',
      systemBKey: 'SystemB key-value.',
    });
  });

  test('A facade can be initialized without data', () => {
    const facade = new Facade();
    expect(facade.data).toBeNull();
  });

  test('Sub-systems methods perform actions with provided data', () => {
    const systemA = new SystemA();
    const systemB = new SystemB();

    expect(systemA.method({ key: 'value' })).toEqual({
      key: 'value',
      systemA: 'SystemA method-value.',
    });

    expect(systemB.method({ key: 'value' })).toEqual({
      key: 'value',
      systemB: 'SystemB method-value.',
    });

    expect(systemA.method(null)).toBeUndefined();

    expect(systemB.method(null)).toBeUndefined();
  });
});
