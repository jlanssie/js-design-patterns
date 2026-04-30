import { ThirdPartyClass } from '../../src/helpers/ThirdPartyClass.class';
import { Bridge } from '../../src/structural-patterns/Bridge.class';

describe('Bridge', () => {
  test('Bridge should decouple an abstraction from its implementation, allowing the abstraction to delegate work to an implementation object independently.', () => {
    // The ThirdPartyClass acts as a "Concrete Implementor"
    const thirdPartyObject = new ThirdPartyClass();

    // The Bridge acts as the "Abstraction".
    // It maintains a reference to the Implementor rather than inheriting from it.
    const bridge = new Bridge(thirdPartyObject);

    // The Abstraction's interface (bridge.method) is mapped to the
    // Implementor's interface (thirdPartyObject.method), but they remain distinct.
    expect(bridge.method()).toBe(thirdPartyObject.method());
  });
});
