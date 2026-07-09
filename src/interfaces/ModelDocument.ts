import z from "zod";

import { ConceptSetSchema } from "./ConceptSet";
import { EntitySchema } from "./Entity";
import { MapFunctionSchema } from "./MapFunction";
import { QueryEntitySchema } from "./QueryEntity";
import { TTContextSchema } from "./TTContext";

// export interface ModelDocument {
//   context?: TTContext;
//   query?: QueryEntity[];
//   folder?: Entity[];
//   conceptSet?: ConceptSet[];
//   function?: MapFunction[];
// }

export const ModelDocumentSchema = z.strictObject({
  context: TTContextSchema.optional(),
  query: z.array(QueryEntitySchema).prefault([]),
  folder: z.array(EntitySchema).prefault([]),
  conceptSet: z.array(ConceptSetSchema).prefault([]),
  function: z.array(MapFunctionSchema).prefault([])
});

export type ModelDocument = z.output<typeof ModelDocumentSchema>;
