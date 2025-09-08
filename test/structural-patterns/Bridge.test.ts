import { ThirdPartyClass } from '../../src/helpers/ThirdPartyClass.class';
import { Bridge } from '../../src/structural-patterns/Bridge.class';

describe('Bridge', () => {
  test('A Bridge implementation calls the implementation of bridged interface.', () => {
    const thirdPartyObject = new ThirdPartyClass();
    const bridge = new Bridge(thirdPartyObject);

    expect(bridge.method()).toBe(thirdPartyObject.method());
  });
});
