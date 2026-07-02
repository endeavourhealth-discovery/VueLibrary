import { Task } from "./Task";

export interface WorkflowResponse {
  page?: number;
  count?: number;
  tasks?: Task[];
}
