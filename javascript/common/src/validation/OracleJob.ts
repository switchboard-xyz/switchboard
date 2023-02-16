import { MinLength, ValidateNested } from "class-validator";
import * as protos from "../protos/index";
import Task from "./Task";

export default class OracleJob {
  @ValidateNested()
  @MinLength(1, { each: true })
  tasks: Task[];

  constructor(iOracleJob: protos.IOracleJob) {
    this.tasks = iOracleJob.tasks?.map((iTask) => new Task(iTask)) ?? [];
  }
}
