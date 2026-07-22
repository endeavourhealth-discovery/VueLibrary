export function isArrayHasLength<T>(value: T[]): value is [T, ...T[]];
export function isArrayHasLength(value: unknown): value is unknown[];
export function isArrayHasLength(value: unknown): boolean {
  return Array.isArray(value) && value.length > 0;
}

export function isArrayOf<T>(value: unknown, itemGuard: (item: unknown) => item is T): value is T[] {
  return Array.isArray(value) && value.every(itemGuard);
}

export function isObjectHasKeys<K extends string>(value: unknown, keys?: readonly K[]): value is Record<K, unknown> & Record<string, unknown> {
  if (!isObject(value)) return false;
  if (!Object.keys(value).length) return false;
  if (keys) {
    const objectKeys = Object.keys(value);
    let result = true;
    keys.forEach(key => {
      if (!objectKeys.includes(key)) result = false;
    });
    return result;
  }
  return true;
}

export function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value != null;
}

export default {
  isArrayHasLength,
  isObjectHasKeys,
  isObject
};
