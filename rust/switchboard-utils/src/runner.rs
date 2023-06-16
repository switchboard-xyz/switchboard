use crate::{json_parse_task, oracle_job::*};
use serde_json::Value;
use switchboard_common::error::Error;

pub type TaskResult<T> = std::result::Result<T, Error>;

pub enum TaskOutput {
    Str(String),
    Num(f64),
    Json(Value),
}

pub struct TaskRunner {}

impl TaskRunner {
    pub async fn http_task(task: &HttpTask) -> TaskResult<TaskOutput> {
        if task.url.is_none() {
            return Err(Error::CustomMessage("HttpTask.url is empty".to_string()));
        }

        let result = crate::task::http_task(task.url.as_ref().unwrap(), None).await?;
        Ok(TaskOutput::Json(result))
    }

    pub async fn json_parse_task(
        task: &JsonParseTask,
        input: Option<TaskOutput>,
    ) -> TaskResult<TaskOutput> {
        if task.path.is_none() {
            return Err(Error::CustomMessage(
                "JsonParseTask.path is empty".to_string(),
            ));
        }

        if input.is_none() {
            return Err(Error::CustomMessage(
                "JsonParseTask requires a JSON input".to_string(),
            ));
        }

        match input.unwrap() {
            TaskOutput::Json(input) => {
                let path = task.path.as_ref().unwrap();
                let result = json_parse_task(input, path)?;
                Ok(TaskOutput::Json(result))
            }
            _ => Err(Error::CustomMessage(
                "JsonParseTask requires the input to be a JSON object".to_string(),
            )),
        }
    }
}
