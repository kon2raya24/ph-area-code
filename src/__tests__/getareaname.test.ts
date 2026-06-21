import { describe, it, expect } from "vitest";
import { getAreaName } from "../getareaname";

describe("getAreaName", () => {
  it("should be a function", () => {
    expect(typeof getAreaName).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => getAreaName(null as any)).toThrow();
  });
});
