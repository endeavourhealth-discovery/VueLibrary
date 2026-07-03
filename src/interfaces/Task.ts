import { TaskType } from "@/enums";
import { TaskState } from "@/enums";

import { TTIriRef } from "./TTIriRef";
import { TaskHistory } from "./TaskHistory";

export interface Task {
  id?: TTIriRef;
  createdBy?: string;
  type?: TaskType;
  state?: TaskState;
  assignedTo?: string;
  dateCreated?: Date;
  history?: TaskHistory[];
  hostUrl?: string;
}
