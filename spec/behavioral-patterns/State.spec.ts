import { Context } from '../../src/behavioral-patterns/state/Context.class';
import { StateOne } from '../../src/behavioral-patterns/state/StateOne.class';
import { StateTwo } from '../../src/behavioral-patterns/state/StateTwo.class';

describe('State', () => {
  test('A Context has several states. Each state handles an action in its own way.', () => {
    const context = new Context();
    context.method();

    expect(context.method()).toBe(false);
    expect(context.getState()).toBeInstanceOf(StateOne);

    context.method();
    context.method();

    expect(context.method()).toBe(true);
    expect(context.getState()).toBeInstanceOf(StateTwo);
  });
});
