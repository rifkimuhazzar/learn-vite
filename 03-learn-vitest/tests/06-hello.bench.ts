import { bench, describe, expect } from "vitest"; // hanya bench yang wajib diimport

describe("Benchmarking", () => {
  function sayHello(name: string): string {
    return `Hello ${name}!`;
  }

  bench("should return a benchmark", () => {
    const result = sayHello("Vitest");
    expect(result).toBe("Hello Vitest!");
  });
});
