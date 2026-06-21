import { describe, it, expect } from "vitest";
import { validateAreaCode } from "../validateareacode";

describe("validateAreaCode", () => {
  it("should be a function", () => {
    expect(typeof validateAreaCode).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => validateAreaCode(null as any)).toThrow();
  });
});
