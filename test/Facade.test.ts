import { Facade } from '../src/Facade.class';

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
});
