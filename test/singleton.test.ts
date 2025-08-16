import { Singleton } from '../src/singleton';

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

    expect(instanceOne.getImmutableData()).toBe('Hello, World!');
    expect(instanceTwo.getImmutableData()).toBe('Hello, World!');
    expect(instanceThree.getImmutableData()).toBe('Hello, World!');
  });

  test('All Singleton Class instance references should return the same data.', () => {
    const instanceOne = new Singleton();
    instanceOne.setData('Hello, World!');

    const instanceTwo = new Singleton();
    instanceTwo.setData('Hello, World!!');

    const instanceThree = new Singleton();
    instanceThree.setData('Hello, World!!!');

    expect(instanceOne.getData()).toBe('Hello, World!!!');
    expect(instanceTwo.getData()).toBe('Hello, World!!!');
    expect(instanceThree.getData()).toBe('Hello, World!!!');
  });
});
