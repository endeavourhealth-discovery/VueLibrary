import z from "zod";

import { EntityReferenceNodeSchema } from "./EntityReferenceNode";
import { NodeSchema } from "./Node";
import { TTIriRefSchema } from "./TTIriRef";

// export interface Pageable<T> {
//   totalCount?: number;
//   currentPage?: number;
//   pageSize?: number;
//   result?: T[];
// }

export const PageableSchema = <T extends z.ZodType>(itemSchema: T) =>
  z.strictObject({
    totalCount: z.number().default(0),
    currentPage: z.number().default(1),
    pageSize: z.number().default(25),
    result: z.array(itemSchema).prefault([])
  });

export type Pageable<T extends z.ZodType> = z.output<ReturnType<typeof PageableSchema<T>>>;

export const PageableEntityReferenceNodeSchema = PageableSchema(EntityReferenceNodeSchema);

export type PageableEntityReferenceNode = z.output<typeof PageableEntityReferenceNodeSchema>;

export const PageableTTIriRefSchema = PageableSchema(TTIriRefSchema);

export type PageableTTIriRef = z.output<typeof PageableTTIriRefSchema>;

export const PageableNodeSchema = PageableSchema(NodeSchema);

export type PageableNode = z.output<typeof PageableNodeSchema>;
