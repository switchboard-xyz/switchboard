import { ArrayMinSize, IsArray, ValidateNested } from "class-validator";
import * as protos from "../protos/index";
import HttpTask from "./HttpTask";
import JsonParseTask from "./JsonParseTask";
import Task from "./Task";

export default class OracleJob {
  @IsArray()
  @ValidateNested()
  @ArrayMinSize(1)
  tasks: Task[];

  constructor(iOracleJob: protos.IOracleJob) {
    this.tasks = iOracleJob.tasks?.map(this._mapTask) ?? [];
  }

  private _mapTask(iTask: protos.OracleJob.ITask): Task {
    if (iTask.httpTask) {
      return new HttpTask(iTask.httpTask);
    } else if (iTask.jsonParseTask) {
      return new JsonParseTask(iTask.jsonParseTask);
    }
    throw new Error(`Unknown Task Type: ${JSON.stringify(iTask)}`);
  }
}
