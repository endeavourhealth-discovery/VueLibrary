import { TTIriRef } from "./TTIriRef";
import { TTLiteral } from "./TTLiteral";
import { TTNode } from "./TTNode";

export type TTValue = TTLiteral | TTIriRef | TTNode;
