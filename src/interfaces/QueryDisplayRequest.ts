import z from "zod";

import { DisplayMode } from "@/enums";

import { Query, QuerySchema } from "./Query";
import { TTIriRef, TTIriRefSchema } from "./TTIriRef";

// export interface QueryDisplayRequest {
//   query?: Query;
//   displayMode?: DisplayMode;
//   graph?: TTIriRef;
// }

export const QueryDisplayRequestSchema = z.strictObject({
  query: QuerySchema.optional(),
  displayMode: z.enum(DisplayMode).optional(),
  graph: TTIriRefSchema.optional()
});

export type QueryDisplayRequest = z.output<typeof QueryDisplayRequestSchema>;
