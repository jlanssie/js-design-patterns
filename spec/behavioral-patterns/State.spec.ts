import { Context } from '../../src/behavioral-patterns/state/Context.class';
import { StateOne } from '../../src/behavioral-patterns/state/StateOne.class';
import { StateTwo } from '../../src/behavioral-patterns/state/StateTwo.class';

describe('State', () => {
  test('State should allow the Context to alter its behavior at runtime when its internal state changes, effectively delegating state-specific logic to separate state objects.', () => {
    // The Context defines the interface of interest to clients
    const context = new Context();

    // Initial behavior is determined by the first state object
    context.method();
    expect(context.method()).toBe(false);
    expect(context.getState()).toBeInstanceOf(StateOne);

    // Transitions are handled by the state objects or the context
    context.method();
    context.method();

    // After state transition, the same method call yields different behavior
    // To the client, it's as if the 'context' object changed its class
    expect(context.method()).toBe(true);
    expect(context.getState()).toBeInstanceOf(StateTwo);
  });
});
