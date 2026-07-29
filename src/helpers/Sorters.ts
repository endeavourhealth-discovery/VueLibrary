import { GenericObject } from "../models/GenericObject";
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
  if (typeof a.priority === "number" && typeof b.priority === "number") {
    if (a.priority < b.priority) {
      return -1;
    } else if (a.priority > b.priority) {
      return 1;
    } else {
      return 0;
    }
  } else throw new Error("Priority must be of type 'number', currently: " + typeof a.priority + ", " + typeof b.priority);
}

export function byScheme(a: unknown, b: unknown): number {
  if (!isObjectHasKeys(a, ["scheme"]) || !isObjectHasKeys(b, ["scheme"])) return 0;
  if (typeof a.scheme === "string" && typeof b.scheme === "string") {
    if (a.scheme.toLowerCase() < b.scheme.toLowerCase()) {
      return -1;
    } else if (a.scheme.toLowerCase() > b.scheme.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  } else throw new Error("Scheme must be of type 'string', currently: " + typeof a.scheme + ", " + typeof b.scheme);
}

export function byLabel(a: unknown, b: unknown): number {
  if (!isObjectHasKeys(a, ["label"]) || !isObjectHasKeys(b, ["label"])) return 0;
  if (typeof a.label === "string" && typeof b.label === "string") {
    if (a.label.toLowerCase() < b.label.toLowerCase()) {
      return -1;
    } else if (a.label.toLowerCase() > b.label.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  } else throw new Error("Label must be of type 'string', currently: " + typeof a.label + ", " + typeof b.label);
}

export function byName(a: unknown, b: unknown): number {
  if (!isObjectHasKeys(a, ["name"]) || !isObjectHasKeys(b, ["name"])) return 0;
  if (typeof a.name === "string" && typeof b.name === "string") {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  } else throw new Error("Name must be of type 'string', currently: " + typeof a.name + ", " + typeof b.name);
}

export function byPosition(a: unknown, b: unknown): number {
  if (!isObjectHasKeys(a, ["position"]) || !isObjectHasKeys(b, ["position"])) return 0;
  if (typeof a.position === "number" && typeof b.position === "number") {
    if (a.position < b.position) {
      return -1;
    } else if (a.position > b.position) {
      return 1;
    } else {
      return 0;
    }
  } else throw new Error("Position must be of type 'number', currently: " + typeof a.position + ", " + typeof b.position);
}

export function byOrder(a: unknown, b: unknown): number {
  if (!isObjectHasKeys(a, ["order"]) || !isObjectHasKeys(b, ["order"])) return 0;
  if (typeof a.order === "number" && typeof b.order === "number") {
    if (a.order < b.order) {
      return -1;
    } else if (a.order > b.order) {
      return 1;
    } else {
      return 0;
    }
  } else throw new Error("Order must be of type 'number', currently: " + typeof a.order + ", " + typeof b.order);
}

export function byKey(a: unknown, b: unknown): number {
  if (!isObjectHasKeys(a, ["key"]) || !isObjectHasKeys(b, ["key"])) return 0;
  if (typeof a.key === "number" && typeof b.key === "number") {
    if (a.key < b.key) {
      return -1;
    } else if (a.key > b.key) {
      return 1;
    } else {
      return 0;
    }
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
