import { TaskModule } from "@/enums";
import { OperatingSystem } from "@/enums";
import { Browser } from "@/enums";
import { Severity } from "@/enums";
import { Status } from "@/enums";

import { Task } from "./Task";

export interface BugReport extends Task {
  product?: string;
  version?: string;
  module?: TaskModule;
  os?: OperatingSystem;
  osOther?: string;
  browser?: Browser;
  browserOther?: string;
  severity?: Severity;
  status?: Status;
  error?: string;
  description?: string;
  reproduceSteps?: string;
  expectedResult?: string;
  actualResult?: string;
}
