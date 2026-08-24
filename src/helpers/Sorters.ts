import { isNumber, isString } from "lodash-es";

import { isObjectHasKeys } from "./DataTypeCheckers";

export function stringAscending(a: string, b: string): number {
  return a.localeCompare(b);
}

export function stringDescending(a: string, b: string): number {
  return b.localeCompare(a);
}

export function numberAscending(a: number, b: number): number {
  return a - b;
}

export function numberDescending(a: number, b: number): number {
  return b - a;
}

export function byPriority(a: unknown, b: unknown): number {
  if (!isObjectHasKeys(a, ["priority"]) || !isObjectHasKeys(b, ["priority"])) return 0;
  if (isNumber(a.priority) && isNumber(b.priority)) {
    return numberAscending(a.priority, b.priority);
  } else throw new Error("Priority must be of type 'number', currently: " + typeof a.priority + ", " + typeof b.priority);
}

export function byScheme(a: unknown, b: unknown): number {
  if (!isObjectHasKeys(a, ["scheme"]) || !isObjectHasKeys(b, ["scheme"])) return 0;
  if (isString(a.scheme) && isString(b.scheme)) {
    return stringAscending(a.scheme, b.scheme);
  } else throw new Error("Scheme must be of type 'string', currently: " + typeof a.scheme + ", " + typeof b.scheme);
}

export function byLabel(a: unknown, b: unknown): number {
  if (!isObjectHasKeys(a, ["label"]) || !isObjectHasKeys(b, ["label"])) return 0;
  if (isString(a.label) && isString(b.label)) {
    return stringAscending(a.label, b.label);
  } else throw new Error("Label must be of type 'string', currently: " + typeof a.label + ", " + typeof b.label);
}

export function byName(a: unknown, b: unknown): number {
  if (!isObjectHasKeys(a, ["name"]) || !isObjectHasKeys(b, ["name"])) return 0;
  if (isString(a.name) && isString(b.name)) {
    return stringAscending(a.name, b.name);
  } else throw new Error("Name must be of type 'string', currently: " + typeof a.name + ", " + typeof b.name);
}

export function byPosition(a: unknown, b: unknown): number {
  if (!isObjectHasKeys(a, ["position"]) || !isObjectHasKeys(b, ["position"])) return 0;
  if (isNumber(a.position) && isNumber(b.position)) {
    return numberAscending(a.position, b.position);
  } else throw new Error("Position must be of type 'number', currently: " + typeof a.position + ", " + typeof b.position);
}

export function byOrder(a: unknown, b: unknown): number {
  if (!isObjectHasKeys(a, ["order"]) || !isObjectHasKeys(b, ["order"])) return 0;
  if (isNumber(a.order) && isNumber(b.order)) {
    return numberAscending(a.order, b.order);
  } else throw new Error("Order must be of type 'number', currently: " + typeof a.order + ", " + typeof b.order);
}

export function byKey(a: unknown, b: unknown): number {
  if (!isObjectHasKeys(a, ["key"]) || !isObjectHasKeys(b, ["key"])) return 0;
  if (isNumber(a.key) && isNumber(b.key)) {
    return numberAscending(a.key, b.key);
  } else if (isString(a.key) && isString(b.key)) {
    return stringAscending(a.key, b.key);
  } else throw new Error("Key must be of type 'number', currently: " + typeof a.key + ", " + typeof b.key);
}

export default {
  byLabel,
  byName,
  byOrder,
  byPosition,
  byPriority,
  byScheme,
  byKey,
  stringAscending,
  stringDescending,
  numberAscending,
  numberDescending
};
