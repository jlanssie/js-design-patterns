import { Facade } from '../../src/structural-patterns/Facade.class';
import { MySystem } from '../../src/helpers/MySystem.class';
import { ThirdPartySystem } from '../../src/helpers/ThirdPartySystem.class';

describe('Facade', () => {
  test('Facade should provide a unified, simplified entry point to a complex subsystem, orchestrating multiple internal calls behind a single interface.', () => {
    // The Facade hides the complexity of interacting with the internal 'MySystem'
    const facade = new Facade({});
    facade.method();

    // The client gets the result without needing to know which subsystem method was invoked
    expect(facade.data.system).toBe('System method-value.');
  });

  test('Facade should aggregate data from various disparate subsystems, presenting a consolidated view to the client.', () => {
    const facade = new Facade({});

    // The client calls one method on the Facade instead of querying multiple subsystems
    const aggregatedData = facade.aggregatedData();

    expect(aggregatedData).toEqual({
      systemKey: 'System key-value.',
      thirdPartySystemKey: 'Third-Party System key-value.',
    });
  });

  test('Facade should manage the lifecycle and initial state of internal components, allowing for flexible initialization.', () => {
    // A Facade often provides default configurations for its subsystems
    const facade = new Facade();
    expect(facade.data).toBeNull();
  });

  test('Subsystems should remain independent and accessible, allowing for specialized use cases while the Facade handles general tasks.', () => {
    // Facade is not a "wrapper" that hides subsystems completely;
    // it simply provides a "shortcut" to them.
    const systemA = new MySystem();
    const systemB = new ThirdPartySystem();

    expect(systemA.method({ key: 'value' })).toEqual({
      key: 'value',
      system: 'System method-value.',
    });

    expect(systemB.method({ key: 'value' })).toEqual({
      key: 'value',
      thirdPartySystemKey: 'Third-Party System method-value.',
    });
  });
});
