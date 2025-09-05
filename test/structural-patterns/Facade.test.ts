import { Facade } from '../../src/structural-patterns/Facade.class';

import { MySystem } from '../../src/MySystem.class';

describe('Facade', () => {
  test("A facade provides a single entry point for other systems' methods", () => {
    const facade = new Facade({});
    facade.method();

    expect(facade.data.system).toBe('System method-value.');
  });

  test("A facade provides a single entry point for other systems' internal data", () => {
    const facade = new Facade({});
    const aggregatedData = facade.aggregatedData();

    expect(aggregatedData).toEqual({
      systemKey: 'System key-value.',
    });
  });

  test('A facade can be initialized without data', () => {
    const facade = new Facade();
    expect(facade.data).toBeNull();
  });

  test('Sub-systems methods perform actions with provided data', () => {
    const systemA = new MySystem();
    const systemB = new MySystem();

    expect(systemA.method({ key: 'value' })).toEqual({
      key: 'value',
      system: 'System method-value.',
    });

    expect(systemB.method({ key: 'value' })).toEqual({
      key: 'value',
      system: 'System method-value.',
    });

    expect(systemA.method(null)).toBeUndefined();

    expect(systemB.method(null)).toBeUndefined();
  });
});
