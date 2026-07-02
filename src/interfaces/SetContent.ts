import { Concept } from "./Concept";

export interface SetContent {
  name?: string;
  description?: string;
  status?: string;
  version?: number;
  setDefinition?: string;
  subsets?: string[];
  concepts?: Concept[];
}
