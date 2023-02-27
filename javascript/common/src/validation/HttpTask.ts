import { IsIn, IsString, IsUrl, MinLength } from "class-validator";
import * as protos from "../protos/index";
import Task from "./Task";

export default class HttpTask implements Task {
  @IsUrl()
  url: string;

  @IsString()
  @IsIn(["METHOD_GET", "METHOD_POST"])
  method: string;

  // TODO: headers
  // @MinLength(0, { each: true })
  // headers: OracleJob.HttpTask.IHeader[];

  @IsString()
  @MinLength(0)
  body: string;

  constructor(iHttpTask: protos.OracleJob.IHttpTask) {
    this.url = iHttpTask.url ?? "";
    this.method = iHttpTask.method?.toString() ?? "METHOD_GET";
    // this.headers = iHttpTask.headers ?? [];
    this.body = iHttpTask.body ?? "";
  }
}
