import { Concept } from "./Concept";

export interface SetDiffObject {
  membersA: Concept[];
  sharedMembers: Concept[];
  membersB: Concept[];
}
