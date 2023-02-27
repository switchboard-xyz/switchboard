import { validate } from "class-validator";
import { IOracleJob, OracleJob } from "../OracleJob";
import ValidationJobObject from "./OracleJob";

type ValidationResult =
  | { success: true; job: OracleJob; errors: undefined }
  | { success: false; job: undefined; errors: string[] };
/**
 *  Given an OracleJob, validate its JSON structure.
 */
export default async (iOracleJob: IOracleJob): Promise<ValidationResult> => {
  const oracleJob = new ValidationJobObject(iOracleJob);
  const errors = await validate(oracleJob, {
    whitelist: true,
    stopAtFirstError: true,
  });
  return errors.length
    ? {
        success: false,
        job: undefined,
        errors: errors.map((error) =>
          error.toString(/* shouldDecorate= */ false)
        ),
      }
    : {
        success: true,
        job: OracleJob.create(iOracleJob),
        errors: undefined,
      };
};
