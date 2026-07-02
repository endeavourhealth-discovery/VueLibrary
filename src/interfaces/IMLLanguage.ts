export interface IMLLanguage {
  text?: string;
  lang?: string;
  info?: { [index: string]: string };
  definitions?: { [index: string]: string };
  prefixes?: { [index: string]: string };
  keywords?: string[];
  booleans?: string[];
  alerts?: string[];
  iriVariables?: { [index: string]: string[] };
}
