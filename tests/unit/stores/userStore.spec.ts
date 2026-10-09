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
      password: "",
      email: "john.doe@ergosoft.co.uk",
      avatar: "http://colour/003-man.png",
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
      password: "",
      email: "john.doe@ergosoft.co.uk",
      type: "standard",
      avatar: "http://colour/003-man.png",
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

describe("updateRecentLocalActivity", () => {
  const FAVOURITES = "http://endhealth.info/im#Favourites";
  const item = (n: number, action = "viewed") => ({ iri: `http://endhealth.info/im#Item${n}`, action, dateTime: new Date(2026, 0, n) });
  const service = () => ({ updateUserRecentActivity: vi.fn() });

  beforeEach(() => {
    createTestingPinia({ stubActions: false });
  });

  it("adds an item for a logged out user", async () => {
    const userStore = useUserStore();
    await userStore.updateRecentLocalActivity(item(1), service());
    expect(userStore.recentLocalActivity).toEqual([item(1)]);
  });

  it("keeps at most 5 items, dropping the oldest", async () => {
    const userStore = useUserStore();
    const svc = service();
    for (let n = 1; n <= 7; n++) await userStore.updateRecentLocalActivity(item(n), svc);
    expect(userStore.recentLocalActivity.map(i => i.iri)).toEqual([3, 4, 5, 6, 7].map(n => item(n).iri));
    expect(svc.updateUserRecentActivity).not.toHaveBeenCalled();
  });

  it("updates the date of an existing item and re-sorts oldest first", async () => {
    const userStore = useUserStore();
    const svc = service();
    for (let n = 1; n <= 3; n++) await userStore.updateRecentLocalActivity(item(n), svc);
    await userStore.updateRecentLocalActivity({ ...item(1), dateTime: new Date(2026, 5, 1) }, svc);
    expect(userStore.recentLocalActivity.map(i => i.iri)).toEqual([2, 3, 1].map(n => item(n).iri));
  });

  it("does not add the favourites item", async () => {
    const userStore = useUserStore();
    await userStore.updateRecentLocalActivity({ iri: FAVOURITES, action: "viewed", dateTime: new Date() }, service());
    expect(userStore.recentLocalActivity).toEqual([]);
  });

  it("sends a copy to the service for a logged in user and leaves the store alone until it responds", async () => {
    const userStore = useUserStore();
    const existing = [item(1)];
    const baseUser: User = {
      username: "testUser",
      displayName: "John Doe",
      password: "",
      email: "john.doe@ergosoft.co.uk",
      avatar: "http://colour/003-man.png",
      roles: [],
      id: uniqueId(),
      type: "standard",
      theme: PrimeVuePresetThemes.AURA,
      primaryColor: PrimeVueColors.EMERALD,
      surfaceColor: PrimeVueColors.SLATE,
      fontSize: FontSize.MEDIUM,
      darkMode: true,
      organisations: [],
      recentActivity: existing,
      favourites: [],
      namespaces: []
    };
    userStore.getAllFromUserDatabase = vi.fn();
    userStore.updateCurrentUser(baseUser);
    const svc = service();
    svc.updateUserRecentActivity.mockResolvedValue({ ...baseUser, recentActivity: [item(1), item(2)] });

    await userStore.updateRecentLocalActivity(item(2), svc);

    expect(svc.updateUserRecentActivity).toHaveBeenCalledWith([item(1), item(2)]);
    expect(existing).toEqual([item(1)]);
    expect(userStore.currentUser?.recentActivity).toHaveLength(2);
  });
});
