import { helloWorld } from "../src/helloworld";

describe("Hello World", () => {
  it("should return 'Hello, World!'", () => {
    expect(helloWorld()).toBe("Hello, World!");
  });
});
