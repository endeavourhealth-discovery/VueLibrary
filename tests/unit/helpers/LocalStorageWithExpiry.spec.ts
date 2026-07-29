import { isBoolean, isString } from "lodash-es";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { localStorageWithExpiry } from "../../../src/helpers/LocalStorageWithExpiry";

describe("localStorageWithExpiry", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });
  it("deletes after expiry", () => {
    localStorageWithExpiry.setItem("expiryTest", "expiryTest", 3000);
    vi.advanceTimersByTime(2000);
    expect(localStorageWithExpiry.getItem("expiryTest", isString)).toBe("expiryTest");
    vi.advanceTimersByTime(2000);
    expect(localStorageWithExpiry.getItem("expiryTest", isString)).toBe(null);
  });
  it("parses boolean correctly", () => {
    localStorageWithExpiry.setItem("expiryTest", true, 3000);
    vi.advanceTimersByTime(2000);
    expect(localStorageWithExpiry.getItem("expiryTest", isBoolean)).toBe(true);
    vi.advanceTimersByTime(2000);
    expect(localStorageWithExpiry.getItem("expiryTest", isBoolean)).toBe(null);
  });
});
