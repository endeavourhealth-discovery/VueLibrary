import { isObjectHasKeys } from "../helpers";
import { GenericObject } from "../interfaces";

const isClient = () => typeof window !== "undefined" && typeof localStorage != "undefined";

export const localStorageWithExpiry = {
  getItem(key: string) {
    if (!isClient()) return null;
    const lsItem = localStorage.getItem(key);
    if (lsItem) {
      try {
        const result = JSON.parse(lsItem);
        if (isObjectHasKeys(result, ["data", "expireTime"])) {
          if (result.expireTime <= Date.now()) {
            localStorage.removeItem(key);
            return null;
          }
          return result.data;
        }
      } catch (e) {
        console.log(`Error getting item from local storage: ${e}. Removing item wth key: ${key}.`);
        localStorage.removeItem(key);
      }
      return null;
    }
    return null;
  },
  setItem(key: string, data: any, maxAge: number = 30 * 24 * 60 * 60 * 1000) {
    // default maxAge 30 days
    if (!isClient()) return;
    const result: { data: GenericObject; expireTime: number } = {
      data: data,
      expireTime: Date.now() + maxAge
    };
    localStorage.setItem(key, JSON.stringify(result));
  },
  removeItem(key: string) {
    if (!isClient()) return;
    localStorage.removeItem(key);
  },
  clear() {
    if (!isClient()) return;
    localStorage.clear();
  }
};
