import z from "zod";

// export interface Binding {
//   predicateBinding?: { [index: string]: string };
//   predicateObject?: { [index: string]: Binding };
// }

export const BindingSchema = z.strictObject({
  predicateBinding: z.map(z.string(), z.string()).default(new Map()),
  get predicateObject() {
    return z.map(z.string(), BindingSchema).default(new Map());
  }
});

export type Binding = z.output<typeof BindingSchema>;

export function isBinding(value: unknown): value is Binding {
  return BindingSchema.safeParse(value).success;
}
