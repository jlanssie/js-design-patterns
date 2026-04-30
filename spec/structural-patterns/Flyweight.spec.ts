import { FlyweightFactory } from '../../src/structural-patterns/FlyweightFactory.class';
import { myEnum, myObject } from '../../src/helpers/myData';
import { thirdPartyObject } from '../../src/helpers/thirdPartyData';

describe('Flyweight', () => {
  test('Flyweight should facilitate the sharing of intrinsic state to support a large number of objects efficiently without redundant memory allocation.', () => {
    // The FlyweightFactory manages the pool of shared objects
    const flyweightFactory = new FlyweightFactory();

    // Requesting the same type multiple times returns the same shared instance
    const firstMyClassObject = flyweightFactory.getObject(myEnum.MyClass);
    const secondMyClassObject = flyweightFactory.getObject(myEnum.MyClass);
    const thirdMyClassObject = flyweightFactory.getObject(myEnum.MyClass);
    const thirdPartyClassObject = flyweightFactory.getObject(
      myEnum.ThirdPartyClass,
    );

    // Assert that the objects are not null and verify identity through sharing
    expect(firstMyClassObject).toBe(secondMyClassObject);
    expect(secondMyClassObject).toBe(thirdMyClassObject);

    // The shared objects maintain their specialized behavior (Intrinsic State)
    expect(firstMyClassObject?.method()).toBe(myObject);
    expect(thirdPartyClassObject?.method()).toBe(thirdPartyObject);
  });

  test('Flyweight Factory should act as a gatekeeper, ensuring that only valid, supported types are instantiated and shared.', () => {
    const flyweightFactory = new FlyweightFactory();

    // The factory prevents the creation of incompatible objects,
    // maintaining the integrity of the shared object pool.
    expect(() => flyweightFactory.getObject('faulty type')).toThrow(
      'Invalid type.',
    );
  });
});
