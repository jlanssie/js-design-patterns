import { StrategyClient } from '../../src/behavioral-patterns/strategy/StrategyClient.class';
import { StrategyOne } from '../../src/behavioral-patterns/strategy/StrategyOne.class';
import { myObject } from '../../src/helpers/myData';
import { StrategyTwo } from '../../src/behavioral-patterns/strategy/StrategyTwo.class';

describe('Strategy', () => {
  test('Strategy pattern has multiple algorithms for a specific task and the client decides the actual implementation to be used at runtime.', () => {
    const strategyClient = new StrategyClient();

    expect(strategyClient.method(new StrategyOne())).toStrictEqual({
      ...myObject,
      strategy: 'StrategyOne',
    });

    expect(strategyClient.method(new StrategyTwo())).toStrictEqual({
      ...myObject,
      strategy: 'StrategyTwo',
    });
  });
});
