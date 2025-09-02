import { Singleton } from '../../src/creational-patterns/Singleton.class';

describe('Singleton', () => {
  test('A Singleton Class should create only one instance.', () => {
    const instanceOne = new Singleton('Hello, World!');
    const instanceTwo = new Singleton('Hello, World!!');
    const instanceThree = new Singleton('Hello, World!!!');

    expect(instanceOne).toBe(instanceTwo);
    expect(instanceTwo).toBe(instanceThree);
    expect(instanceThree).toBe(instanceOne);
  });

  test('A Singleton Class constructor should only be called once.', () => {
    const instanceOne = new Singleton('Hello, World!');
    const instanceTwo = new Singleton('Hello, World!!');
    const instanceThree = new Singleton('Hello, World!!!');

    expect(instanceOne.immutableData).toBe('Hello, World!');
    expect(instanceTwo.immutableData).toBe('Hello, World!');
    expect(instanceThree.immutableData).toBe('Hello, World!');
  });

  test('All Singleton Class instance references should return the same data.', () => {
    const instanceOne = new Singleton();
    instanceOne.data = 'Hello, World!';

    const instanceTwo = new Singleton();
    instanceTwo.data = 'Hello, World!!';

    const instanceThree = new Singleton();
    instanceThree.data = 'Hello, World!!!';

    expect(instanceOne.data).toBe('Hello, World!!!');
    expect(instanceTwo.data).toBe('Hello, World!!!');
    expect(instanceThree.data).toBe('Hello, World!!!');
  });
});
