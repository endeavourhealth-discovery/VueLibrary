import { afterEach, describe, expect, it, vi } from "vitest";
import z from "zod";

import { parseApiResponse, setSafeParseApiResponse } from "../../../src/helpers";

const schema = z.object({ name: z.string() });

describe("parseApiResponse", () => {
  afterEach(() => {
    setSafeParseApiResponse(false);
    vi.restoreAllMocks();
  });

  it("returns valid data", () => {
    expect(parseApiResponse({ name: "a" }, schema)).toEqual({ name: "a" });
  });

  it("throws on invalid data by default", () => {
    expect(() => parseApiResponse({ name: 1 }, schema)).toThrow();
  });

  it("returns the data unchanged and logs the error in safe mode", () => {
    const error = vi.spyOn(console, "error").mockImplementation(() => {});
    setSafeParseApiResponse(true);
    const bad = { name: 1 };
    expect(parseApiResponse(bad, schema)).toBe(bad);
    expect(error).toHaveBeenCalledTimes(1);
  });

  it("returns parsed data without logging in safe mode when valid", () => {
    const error = vi.spyOn(console, "error").mockImplementation(() => {});
    setSafeParseApiResponse(true);
    expect(parseApiResponse({ name: "a" }, schema)).toEqual({ name: "a" });
    expect(error).not.toHaveBeenCalled();
  });

  it("can be switched back to strict mode", () => {
    setSafeParseApiResponse(true);
    setSafeParseApiResponse(false);
    expect(() => parseApiResponse({ name: 1 }, schema)).toThrow();
  });
});
