import { describe, it, expect, vi } from "vitest"; // dapat tanpa diimport juga karena sudah disetting pada confignya

describe("mock", () => {
  function sayHello(name: string, callback: (message: string) => void) {
    callback(`Hello ${name}!`);
  }

  it("should support mock", () => {
    const callback = vi.fn();
    sayHello("Vitest", callback);

    expect(callback).toHaveBeenCalledWith("Hello Vitest!");
  });
});
