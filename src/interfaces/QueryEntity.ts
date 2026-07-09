import z from "zod";

import { Entity, EntitySchema } from "./Entity";
import { Query, QuerySchema } from "./Query";

// export interface QueryEntity extends Entity {
//   definition?: Query;
// }

export const QueryEntitySchema = EntitySchema.extend({
  definition: QuerySchema.optional()
});

export type QueryEntity = z.output<typeof QueryEntitySchema>;
