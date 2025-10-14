import { FlyweightFactory } from '../../src/structural-patterns/FlyweightFactory.class';
import { myEnum, myObject } from '../../src/helpers/myData';
import { thirdPartyObject } from '../../src/helpers/thirdPartyData';

describe('Flyweight', () => {
  test('A Flyweight should reuse the same instance when requested multiple times', () => {
    const flyweightFactory = new FlyweightFactory();
    const firstMyClassObject = flyweightFactory.getObject(myEnum.MyClass);
    const secondMyClassObject = flyweightFactory.getObject(myEnum.MyClass);
    const thirdMyClassObject = flyweightFactory.getObject(myEnum.MyClass);
    const thirdPartyClassObject = flyweightFactory.getObject(
      myEnum.ThirdPartyClass,
    );

    expect(firstMyClassObject).not.toBeNull();
    expect(secondMyClassObject).not.toBeNull();
    expect(thirdMyClassObject).not.toBeNull();
    expect(thirdPartyClassObject).not.toBeNull();

    // @ts-expect-error TS18048: firstMyClassObject is possibly undefined
    expect(firstMyClassObject.method()).toBe(myObject);

    // @ts-expect-error TS18048: firstMyClassObject is possibly undefined
    expect(secondMyClassObject.method()).toBe(myObject);

    // @ts-expect-error TS18048: firstMyClassObject is possibly undefined
    expect(thirdMyClassObject.method()).toBe(myObject);

    // @ts-expect-error TS18048: firstMyClassObject is possibly undefined
    expect(thirdPartyClassObject.method()).toBe(thirdPartyObject);
  });

  test('A Flyweight of an unsupported type should throw an error', () => {
    const flyweightFactory = new FlyweightFactory();

    expect(() => flyweightFactory.getObject('faulty type')).toThrow(
      'Invalid type.',
    );
  });
});
