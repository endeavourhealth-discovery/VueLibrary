export interface Binding {
  predicateBinding?: { [index: string]: string };
  predicateObject?: { [index: string]: Binding };
}
