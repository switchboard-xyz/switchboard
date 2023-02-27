import { IsString, MinLength } from "class-validator";
import * as protos from "../protos/index";
import Task from "./Task";

export default class JsonParseTask implements Task {
  @IsString({})
  @MinLength(1)
  path: string;

  // TODO: aggregationMethod.
  // aggregationMethod: OracleJob.JsonParseTask.AggregationMethod;

  constructor(iJsonParseTask: protos.OracleJob.IJsonParseTask) {
    this.path = iJsonParseTask.path ?? "";
  }
}
