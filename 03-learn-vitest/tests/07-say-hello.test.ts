import { sayHello } from "../src/say-hello";

describe("sayHello(name)", () => {
  it("should say hello", () => {
    const result = sayHello("Vitest");
    expect(result).toBe("Hello Vitest!");
  });
});
