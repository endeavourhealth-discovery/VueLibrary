// export interface PropertyShape {
//   label?: string;
//   comment?: string;
//   name?: string;
//   order: number;
//   minCount?: number;
//   maxCount?: number;
//   componentType: TTIriRef;
//   path: TTIriRef;
//   datatype?: PropertyRange;
//   node?: PropertyRange;
//   validation?: TTIriRef;
//   search?: TTIriRef;
//   select?: TTIriRef[];
//   argument?: Argument[];
//   valueVariable?: string;
//   isIri?: TTIriRef;
//   isTextValue?: string;
//   isNumericValue?: string;
//   forceIsValue?: boolean;
//   builderChild?: boolean;
//   showTitle?: boolean;
//   group?: TTIriRef;
//   property?: PropertyShape[];
//   clazz?: PropertyRange;
//   validationErrorMessage?: string;
//   function?: TTIriRef;
//   parameter?: ParameterShape[];
//   valueIri?: TTIriRef;
//   expression?: NodeShape;
//   arrayButtons?: ArrayButtons;
//   hasValue?: any;
//   hasValueType?: TTIriRef;
//   definition?: string;
//   ascending?: string;
//   descending?: string;
//   orderable?: boolean;
//   hasValueSet?: TTIriRef;
//   definingProperty?: boolean;
//   isValidEntity?: TTIriRef;
//   highCardinality?: boolean;
//   isValidArguments?: Argument[];
//   inversePath?: TTIriRef;
//   generic?: boolean;
// }
import z from "zod";

import { ArgumentSchema } from "./Argument";
import { ArrayButtonsSchema } from "./ArrayButtons";
import { NodeShapeSchema } from "./NodeShape";
import { ParameterShapeSchema } from "./ParameterShape";
import { PropertyRangeSchema } from "./PropertyRange";
import { TTIriRefSchema } from "./TTIriRef";

export const PropertyShapeSchema = z.strictObject({
  label: z.string().optional(),
  comment: z.string().optional(),
  name: z.string().optional(),
  order: z.number(),
  minCount: z.number().optional(),
  maxCount: z.number().optional(),
  componentType: TTIriRefSchema,
  path: TTIriRefSchema,
  datatype: PropertyRangeSchema.optional(),
  node: PropertyRangeSchema.optional(),
  validation: TTIriRefSchema.optional(),
  search: TTIriRefSchema.optional(),
  select: z.array(TTIriRefSchema).prefault([]),
  argument: z.array(ArgumentSchema).prefault([]),
  valueVariable: z.string().optional(),
  isIri: TTIriRefSchema.optional(),
  isTextValue: z.string().optional(),
  isNumericValue: z.string().optional(),
  forceIsValue: z.boolean().default(false),
  builderChild: z.boolean().default(false),
  showTitle: z.boolean().default(false),
  group: TTIriRefSchema.optional(),
  get property(): z.ZodPrefault<z.ZodArray<typeof PropertyShapeSchema>> {
    return z.array(PropertyShapeSchema).prefault([]);
  },
  clazz: PropertyRangeSchema.optional(),
  validationErrorMessage: z.string().optional(),
  function: TTIriRefSchema.optional(),
  parameter: z.array(ParameterShapeSchema).prefault([]),
  valueIri: TTIriRefSchema.optional(),
  get expression(): z.ZodOptional<typeof NodeShapeSchema> {
    return NodeShapeSchema.optional();
  },
  arrayButtons: ArrayButtonsSchema.optional(),
  hasValue: z.any().optional(),
  hasValueType: TTIriRefSchema.optional(),
  definition: z.string().optional(),
  ascending: z.string().optional(),
  descending: z.string().optional(),
  orderable: z.boolean().default(false),
  definingProperty: z.boolean().default(false),
  highCardinality: z.boolean().default(false),
  generic: z.boolean().default(false),
  hasValueSet: TTIriRefSchema.optional(),
  isValidEntity: TTIriRefSchema.optional(),
  isValidArguments: z.array(ArgumentSchema).prefault([]),
  inversePath: TTIriRefSchema.optional()
});

export type PropertyShape = z.output<typeof PropertyShapeSchema>;

export function isPropertyShape(value: unknown): value is PropertyShape {
  return PropertyShapeSchema.safeParse(value).success;
}
