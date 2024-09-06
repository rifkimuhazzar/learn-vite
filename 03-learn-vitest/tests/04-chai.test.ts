import { describe, it, expect, assert } from "vitest"; // dapat tanpa diimport juga karena sudah disetting pada confignya

function sayHello(name: string): string {
  return `Hello ${name}!`;
}

describe("sayHello(name)", () => {
  it("should return with name", () => {
    expect(sayHello("World")).to.be.a("string", "Hello World!"); // cara chai
    expect(sayHello("World")).toBe("Hello World!"); // cara jest
    assert.equal(sayHello("World"), "Hello World!"); // cara chai
  });
});
