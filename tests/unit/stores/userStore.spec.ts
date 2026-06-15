import { createTestingPinia } from "@pinia/testing";
import { flushPromises } from "@vue/test-utils";
import { uniqueId } from "lodash-es";
import { afterAll, beforeEach, describe, expect, it, vi } from "vitest";

import { FontSize, PrimeVueColors, PrimeVuePresetThemes } from "../../../src/enums";
import { User } from "../../../src/models";
import { useUserStore } from "../../../src/stores";

describe("state", () => {
  beforeEach(() => {
    vi.resetAllMocks();
    window.sessionStorage.clear();
    createTestingPinia({ stubActions: false });
  });

  afterAll(() => {
    window.sessionStorage.clear();
  });

  it("userStore should start with the correct values", () => {
    const userStore = useUserStore();
    expect(Object.keys(userStore)).toEqual(expect.arrayContaining(["currentUser"]));
    expect(userStore.currentUser).toEqual(undefined);
  });
});

describe("getters", () => {
  it("can get isLoggedIn ___ true", async () => {
    const userStore = useUserStore();
    const testUser: User = {
      username: "testUser",
      displayName: "John Doe",
      email: "john.doe@ergosoft.co.uk",
      avatar: "colour/003-man.png",
      roles: [],
      id: uniqueId(),
      type: "standard",
      theme: PrimeVuePresetThemes.AURA,
      primaryColor: PrimeVueColors.EMERALD,
      surfaceColor: PrimeVueColors.SLATE,
      fontSize: FontSize.MEDIUM,
      darkMode: true,
      organisations: [],
      recentActivity: [],
      favourites: [],
      namespaces: []
    };
    userStore.getAllFromUserDatabase = vi.fn();
    userStore.updateCurrentUser(testUser);
    await flushPromises();
    expect(userStore.isLoggedIn).toEqual(true);
  });

  it("can get isLoggedIn ___ false", async () => {
    const userStore = useUserStore();
    userStore.getAllFromUserDatabase = vi.fn();
    userStore.updateCurrentUser(undefined);
    await flushPromises();
    expect(userStore.isLoggedIn).toEqual(false);
  });

  it("can get isLoggedIn ___ false", async () => {
    const userStore = useUserStore();
    userStore.getAllFromUserDatabase = vi.fn();
    userStore.updateCurrentUser(undefined);
    await flushPromises();
    expect(userStore.isLoggedIn).toEqual(false);
  });
});

describe("mutations", () => {
  it("can updateCurrentUser", async () => {
    const userStore = useUserStore();

    const testUser: User = {
      username: "testUser",
      displayName: "John Doe",
      email: "john.doe@ergosoft.co.uk",
      type: "standard",
      avatar: "colour/003-man.png",
      roles: [],
      id: uniqueId(),
      theme: PrimeVuePresetThemes.AURA,
      primaryColor: PrimeVueColors.EMERALD,
      surfaceColor: PrimeVueColors.SLATE,
      fontSize: FontSize.MEDIUM,
      darkMode: true,
      organisations: [],
      recentActivity: [],
      favourites: [],
      namespaces: []
    };
    userStore.getAllFromUserDatabase = vi.fn();
    userStore.updateCurrentUser(testUser);
    await flushPromises();
    expect(userStore.currentUser).toEqual(testUser);
  });
});
