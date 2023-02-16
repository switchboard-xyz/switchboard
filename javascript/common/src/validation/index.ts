import { validate } from "class-validator";
import * as protos from "../protos/index";
import OracleJob from "./OracleJob";

type ValidationResult =
  | { success: true; job: protos.OracleJob; errors: undefined }
  | { success: false; job: undefined; errors: string[] };
/**
 *  Given an OracleJob, validate its JSON structure.
 */
export default async (
  iOracleJob: protos.IOracleJob
): Promise<ValidationResult> => {
  const oracleJob = new OracleJob(iOracleJob);
  const errors = await validate(oracleJob, { whitelist: true });
  return errors.length
    ? {
        success: false,
        job: undefined,
        errors: errors.map((error) =>
          error.toString(/* shouldDecorate= */ true)
        ),
      }
    : {
        success: true,
        job: protos.OracleJob.create(iOracleJob),
        errors: undefined,
      };
};
