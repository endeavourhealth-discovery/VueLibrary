export function isEnumValue<E extends Record<string, string>>(enumObj: E, value: unknown): value is E[keyof E] {
  return typeof value === "string" && Object.values(enumObj).includes(value as E[keyof E]);
}
