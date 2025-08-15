import { Singleton } from "../src/singleton";

describe("Singleton", () => {
  it("should allow only one instance of a class", () => {
    const instanceOne = new Singleton();
    instanceOne.setData("Hello, World!");
    const instanceTwo = new Singleton();
    instanceTwo.setData("Hello, World!!");
    const instanceThree = new Singleton();
    instanceThree.setData("Hello, World!!!");

    expect(instanceOne.getData()).toBe("Hello, World!!!");
    expect(instanceTwo.getData()).toBe("Hello, World!!!");
    expect(instanceThree.getData()).toBe("Hello, World!!!");
  });
});
