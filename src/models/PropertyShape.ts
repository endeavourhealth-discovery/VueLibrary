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
  select: z.array(TTIriRefSchema).optional(),
  argument: z.array(ArgumentSchema).optional(),
  valueVariable: z.string().optional(),
  isIri: TTIriRefSchema.optional(),
  isTextValue: z.string().optional(),
  isNumericValue: z.string().optional(),
  forceIsValue: z.boolean().optional(),
  builderChild: z.boolean().optional(),
  showTitle: z.boolean().optional(),
  group: TTIriRefSchema.optional(),
  get property(): z.ZodOptional<z.ZodArray<typeof PropertyShapeSchema>> {
    return z.array(PropertyShapeSchema).optional();
  },
  clazz: PropertyRangeSchema.optional(),
  validationErrorMessage: z.string().optional(),
  function: TTIriRefSchema.optional(),
  parameter: z.array(ParameterShapeSchema).optional(),
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
  orderable: z.boolean().optional(),
  definingProperty: z.boolean().optional(),
  highCardinality: z.boolean().optional(),
  hasValueSet: TTIriRefSchema.optional(),
  isValidEntity: TTIriRefSchema.optional(),
  isValidArguments: z.array(ArgumentSchema).optional(),
  inversePath: TTIriRefSchema.optional(),
  association: z.boolean().optional()
});

export type PropertyShape = z.output<typeof PropertyShapeSchema>;

export function isPropertyShape(value: unknown): value is PropertyShape {
  return PropertyShapeSchema.safeParse(value).success;
}
