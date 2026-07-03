export interface CodeGenDto {
  name?: string;
  extension?: string;
  collectionWrapper?: string;
  datatypeMap?: { [index: string]: string };
  template?: string;
  complexTypes?: boolean;
}
