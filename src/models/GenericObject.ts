import z from "zod";

export interface GenericObject {
  [x: string]: any;
}

export const GenericObjectSchema = z.looseObject({});

// export type GenericObject = z.output<typeof GenericObjectSchema>;
