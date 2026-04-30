import { StrategyClient } from '../../src/behavioral-patterns/strategy/StrategyClient.class';
import { StrategyOne } from '../../src/behavioral-patterns/strategy/StrategyOne.class';
import { myObject } from '../../src/helpers/myData';
import { StrategyTwo } from '../../src/behavioral-patterns/strategy/StrategyTwo.class';

describe('Strategy', () => {
  test('Strategy should define a family of encapsulated algorithms and make them interchangeable, allowing the client to vary the behavior independently of its own implementation.', () => {
    // The StrategyClient acts as the "Context"
    const strategyClient = new StrategyClient();

    // StrategyOne and StrategyTwo are interchangeable algorithms within the same family
    // The client remains unaware of the specific logic inside each strategy
    expect(strategyClient.method(new StrategyOne())).toStrictEqual({
      ...myObject,
      strategy: 'StrategyOne',
    });

    // Switching the strategy at runtime changes the behavior without modifying the StrategyClient
    expect(strategyClient.method(new StrategyTwo())).toStrictEqual({
      ...myObject,
      strategy: 'StrategyTwo',
    });
  });
});
