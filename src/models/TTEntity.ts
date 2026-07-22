import z from "zod";

// export interface TTEntity extends TTNode {
//   context?: TTContext;
//   crud?: TTIriRef;
//   type?: TTArray;
//   status?: TTIriRef;
//   name?: string;
//   scheme?: TTIriRef;
//   version?: number;
//   description?: string;
//   code?: string;
//   types?: TTIriRef[];
//   prefixes?: TTPrefix[];
// }

export const TTEntitySchema = z.looseObject({});
//  z.map(z.string(), z.union([TTValueSchema, TTArraySchema]));

export type TTEntity = z.output<typeof TTEntitySchema>;

export function isTTEntity(value: unknown): value is TTEntity {
  return TTEntitySchema.safeParse(value).success;
}
