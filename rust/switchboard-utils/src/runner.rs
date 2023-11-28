use std::collections::HashMap;

use crate::protobufs::oracle_job::jupiter_swap_task::SwapAmount;
use crate::protobufs::oracle_job::*;
use crate::protos::*;
use crate::task::json::json_parse_task;

use serde_json::Value;
use switchboard_common::error::SbError;

pub type TaskResult<T> = std::result::Result<T, SbError>;

/// The TaskOutput represents the different kinds of outputs a task may return.
#[derive(Default, PartialEq, Clone, Debug)]
pub enum TaskOutput {
    #[default]
    None,
    Str(String),
    Num(f64),
    Json(Value),
}
impl TryInto<f64> for TaskOutput {
    type Error = SbError;

    fn try_into(self) -> Result<f64, SbError> {
        match self {
            TaskOutput::Str(s) => s.parse().map_err(|e| SbError::CustomError {
                message: format!("Failed to parse string to numeric value, {}", s),
                source: std::sync::Arc::new(e),
            }),
            TaskOutput::Num(n) => Ok(n),
            TaskOutput::Json(val) => val
                .as_f64()
                .ok_or(SbError::Message("Cannot convert JSON to f64")),
            TaskOutput::None => Err(SbError::Message("Cannot convert None to f64")),
        }
    }
}

/// The TaskRunnerConfig contains the parameters used to execute the OracleJob tasks.
#[derive(Default, PartialEq, Clone, Debug)]
pub enum TaskRunnerConfig {
    #[default]
    None,
    Solana(String),
}

/// The TaskRunnerContext is used to pass the current running execution to child tasks.
/// This is useful for caching values between tasks and passing values between tasks.
#[derive(Default, PartialEq, Clone, Debug)]
pub struct TaskRunnerContext {
    pub value: TaskOutput,
    pub cache: HashMap<String, String>,
}
impl TaskRunnerContext {
    /// Initialize a new TaskRunnerContext
    pub fn new() -> Self {
        Self {
            value: TaskOutput::None,
            cache: HashMap::new(),
        }
    }

    /// Set the current running result.
    pub fn set_value(&mut self, value: TaskOutput) {
        self.value = value;
    }

    /// Get a cached value from the context.
    pub fn get_cached_value(&self, key: &str) -> Option<&String> {
        self.cache.get(key)
    }

    /// Set a cached value in the context.
    pub fn set_cached_value(&mut self, key: &str, value: &str) {
        self.cache.insert(key.to_string(), value.to_string());
    }

    pub fn as_f64(&self) -> Result<f64, SbError> {
        let result: f64 = self.value.clone().try_into().map_err(|_| {
            SbError::CustomMessage(format!(
                "Failed to convert TaskOutput to f64: {:?}",
                self.value
            ))
        })?;
        Ok(result)
    }
}

pub struct TaskRunner {
    pub config: TaskRunnerConfig,
}

impl TaskRunner {
    pub fn new(config: Option<TaskRunnerConfig>) -> Self {
        Self {
            config: config.unwrap_or_default(),
        }
    }

    pub async fn run(
        oracle_job: &OracleJob,
        config: Option<TaskRunnerConfig>,
    ) -> TaskResult<TaskOutput> {
        if oracle_job.tasks.is_empty() {
            return Err(SbError::Message("OracleJob.tasks is empty"));
        }

        let runner = TaskRunner::new(config);

        runner.run_oracle_job(oracle_job).await
    }

    pub async fn run_oracle_job(&self, oracle_job: &OracleJob) -> TaskResult<TaskOutput> {
        let mut ctx = TaskRunnerContext::new();

        for task in oracle_job.tasks.clone() {
            let output = self.run_task(&ctx, &task).await?;
            ctx.set_value(output);
        }

        Ok(ctx.value)
    }

    pub async fn run_task(&self, ctx: &TaskRunnerContext, task: &Task) -> TaskResult<TaskOutput> {
        if task.task.is_none() {
            return Err(SbError::Message("Task.task is empty"));
        }

        // TODO: cache expand

        match task.task.clone().unwrap() {
            task::Task::HttpTask(task) => self.http_task(ctx, &task).await,
            task::Task::JsonParseTask(task) => self.json_parse_task(ctx, &task).await,
            task::Task::JupiterSwapTask(task) => self.jupiter_swap_task(ctx, &task).await,
            task::Task::ValueTask(task) => self.value_task(ctx, &task),
            task::Task::AddTask(task) => self.add_task(ctx, &task),
            task::Task::SubtractTask(task) => self.subtract_task(ctx, &task),
            task::Task::MultiplyTask(task) => self.multiply_task(ctx, &task),
            task::Task::DivideTask(task) => self.divide_task(ctx, &task),
            _ => Err(SbError::CustomMessage(format!(
                "Task {:?} is not implemented",
                task.task.clone().unwrap(),
            ))),
        }
    }

    pub fn value_task(&self, _ctx: &TaskRunnerContext, task: &ValueTask) -> TaskResult<TaskOutput> {
        if task.value.is_none() {
            return Err(SbError::Message("ValueTask.value is empty"));
        }

        match task.value.clone().unwrap() {
            value_task::Value::Value(v) => Ok(TaskOutput::Num(v)),
            value_task::Value::Big(v) => {
                let result: f64 = v.parse().map_err(|e| SbError::CustomError {
                    message: format!("Failed to parse string ({:?}) to numeric value", { v }),
                    source: std::sync::Arc::new(e),
                })?;
                Ok(TaskOutput::Num(result))
            }
            value_task::Value::AggregatorPubkey(_) => Err(SbError::Message(
                "ValueTask does not support the aggregator pubkey field",
            )),
        }
    }

    pub async fn http_task(
        &self,
        _ctx: &TaskRunnerContext,
        task: &HttpTask,
    ) -> TaskResult<TaskOutput> {
        if task.url.is_none() {
            return Err(SbError::Message("HttpTask.url is empty"));
        }

        let result = crate::task::http_task(task.url.as_ref().unwrap(), None).await?;
        Ok(TaskOutput::Json(result))
    }

    pub async fn json_parse_task(
        &self,
        ctx: &TaskRunnerContext,
        task: &JsonParseTask,
    ) -> TaskResult<TaskOutput> {
        if task.path.is_none() {
            return Err(SbError::Message("JsonParseTask.path is empty"));
        }

        let input = ctx.value.clone();

        if input == TaskOutput::None {
            return Err(SbError::Message("JsonParseTask requires a JSON input"));
        }

        match input {
            TaskOutput::Json(input) => {
                let path = task.path.as_ref().unwrap();
                let result = json_parse_task(input, path)?;
                Ok(TaskOutput::Json(result))
            }
            _ => Err(SbError::Message(
                "JsonParseTask requires the input to be a JSON object",
            )),
        }
    }

    pub async fn jupiter_swap_task(
        &self,
        _ctx: &TaskRunnerContext,
        task: &JupiterSwapTask,
    ) -> TaskResult<TaskOutput> {
        let mut is_flipped = false;

        if task.in_token_address.is_none() {
            return Err(SbError::Message(
                "JupiterSwapTask.in_token_address is empty",
            ));
        }

        if task.out_token_address.is_none() {
            return Err(SbError::Message(
                "JupiterSwapTask.out_token_address is empty",
            ));
        }

        let swap_amount = if let Some(amount) = task.swap_amount.clone() {
            match amount {
                SwapAmount::BaseAmount(amount) => amount.to_string(),
                SwapAmount::BaseAmountString(amount_str) => amount_str,
                SwapAmount::QuoteAmount(amount) => {
                    is_flipped = true;
                    amount.to_string()
                }
                SwapAmount::QuoteAmountString(amount_str) => {
                    is_flipped = true;
                    amount_str
                }
            }
        } else {
            "1000000000".to_string()
        };

        // TODO: Fetch token mints and normalize amounts

        let result = if is_flipped {
            crate::task::jupiter_swap_task(
                task.out_token_address.as_ref().unwrap(),
                task.in_token_address.as_ref().unwrap(),
                &swap_amount,
                task.slippage,
            )
            .await?
        } else {
            crate::task::jupiter_swap_task(
                task.in_token_address.as_ref().unwrap(),
                task.out_token_address.as_ref().unwrap(),
                &swap_amount,
                task.slippage,
            )
            .await?
        };

        Ok(TaskOutput::Json(result))
    }

    pub fn add_task(&self, ctx: &TaskRunnerContext, task: &AddTask) -> TaskResult<TaskOutput> {
        let input = ctx.value.clone();

        if input == TaskOutput::None {
            return Err(SbError::Message("AddTask requires an input"));
        }

        if task.addition.is_none() {
            return Err(SbError::Message("AddTask.addition is empty"));
        }

        let a: f64 = input.try_into()?;

        let b: f64 = match task.addition.clone().unwrap() {
            add_task::Addition::Scalar(v) => Ok(v),
            add_task::Addition::AggregatorPubkey(_) => Err(SbError::Message(
                "AddTask does not support multiplying by aggregator pubkey",
            )),
            add_task::Addition::Job(_) => Err(SbError::Message(
                "AddTask does not support multiplying by job pubkey",
            )),
            add_task::Addition::Big(v) => v.parse().map_err(|e| SbError::CustomError {
                message: format!("Failed to parse string ({:?}) to numeric value", { v }),
                source: std::sync::Arc::new(e),
            }),
        }?;

        Ok(TaskOutput::Num(a + b))
    }

    pub fn subtract_task(
        &self,
        ctx: &TaskRunnerContext,
        task: &SubtractTask,
    ) -> TaskResult<TaskOutput> {
        let input = ctx.value.clone();

        if input == TaskOutput::None {
            return Err(SbError::Message("SubtractTask requires an input"));
        }

        if task.subtraction.is_none() {
            return Err(SbError::Message("SubtractTask.subtraction is empty"));
        }

        let a: f64 = input.try_into()?;

        let b: f64 = match task.subtraction.clone().unwrap() {
            subtract_task::Subtraction::Scalar(v) => Ok(v),
            subtract_task::Subtraction::AggregatorPubkey(_) => Err(SbError::Message(
                "SubtractTask does not support multiplying by aggregator pubkey",
            )),
            subtract_task::Subtraction::Job(_) => Err(SbError::Message(
                "SubtractTask does not support multiplying by job pubkey",
            )),
            subtract_task::Subtraction::Big(v) => v.parse().map_err(|e| SbError::CustomError {
                message: format!("Failed to parse string ({:?}) to numeric value", { v }),
                source: std::sync::Arc::new(e),
            }),
        }?;

        Ok(TaskOutput::Num(a - b))
    }

    pub fn multiply_task(
        &self,
        ctx: &TaskRunnerContext,
        task: &MultiplyTask,
    ) -> TaskResult<TaskOutput> {
        let input = ctx.value.clone();

        if input == TaskOutput::None {
            return Err(SbError::Message("MultiplyTask requires an input"));
        }

        if task.multiple.is_none() {
            return Err(SbError::Message("MultiplyTask.multiple is empty"));
        }

        let a: f64 = input.try_into()?;

        let b: f64 = match task.multiple.clone().unwrap() {
            multiply_task::Multiple::Scalar(v) => Ok(v),
            multiply_task::Multiple::AggregatorPubkey(_) => Err(SbError::Message(
                "MultiplyTask does not support multiplying by aggregator pubkey",
            )),
            multiply_task::Multiple::Job(_) => Err(SbError::Message(
                "MultiplyTask does not support multiplying by job pubkey",
            )),
            multiply_task::Multiple::Big(v) => v.parse().map_err(|e| SbError::CustomError {
                message: format!("Failed to parse string ({:?}) to numeric value", { v }),
                source: std::sync::Arc::new(e),
            }),
        }?;

        Ok(TaskOutput::Num(a * b))
    }

    pub fn divide_task(
        &self,
        ctx: &TaskRunnerContext,
        task: &DivideTask,
    ) -> TaskResult<TaskOutput> {
        let input = ctx.value.clone();

        if input == TaskOutput::None {
            return Err(SbError::Message("DivideTask requires an input"));
        }

        if task.denominator.is_none() {
            return Err(SbError::Message("DivideTask.multiple is empty"));
        }

        let a: f64 = input.try_into()?;

        let b: f64 = match task.denominator.clone().unwrap() {
            divide_task::Denominator::Scalar(v) => Ok(v),
            divide_task::Denominator::AggregatorPubkey(_) => Err(SbError::Message(
                "DivideTask does not support multiplying by aggregator pubkey",
            )),
            divide_task::Denominator::Job(_) => Err(SbError::Message(
                "DivideTask does not support multiplying by job pubkey",
            )),
            divide_task::Denominator::Big(v) => v.parse().map_err(|e| SbError::CustomError {
                message: format!("Failed to parse string ({:?}) to numeric value", { v }),
                source: std::sync::Arc::new(e),
            }),
        }?;

        Ok(TaskOutput::Num(a / b))
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    // use crate::protos::oracle_job::task::Task;
    // use crate::protos::*;

    #[tokio::test]
    async fn test_math_tasks() {
        let oracle_job = OracleJob {
            tasks: vec![
                Task {
                    task: Some(task::Task::ValueTask(ValueTask {
                        value: Some(value_task::Value::Value(1.0)),
                    })),
                },
                Task {
                    task: Some(task::Task::AddTask(AddTask {
                        addition: Some(add_task::Addition::Scalar(6.5)),
                    })),
                },
                Task {
                    task: Some(task::Task::SubtractTask(SubtractTask {
                        subtraction: Some(subtract_task::Subtraction::Scalar(0.5)),
                    })),
                },
                Task {
                    task: Some(task::Task::MultiplyTask(MultiplyTask {
                        multiple: Some(multiply_task::Multiple::Scalar(4.0)),
                    })),
                },
                Task {
                    task: Some(task::Task::DivideTask(DivideTask {
                        denominator: Some(divide_task::Denominator::Scalar(2.0)),
                    })),
                },
            ],
        };

        let runner = TaskRunner::new(None);
        let result = runner.run_oracle_job(&oracle_job).await.unwrap();
        let result_f64: f64 = result.try_into().unwrap();

        assert!(result_f64 == 14.0);
    }

    #[tokio::test]
    async fn test_jupiter_swap_task() {
        let jupiter_swap_task = JupiterSwapTask {
            in_token_address: Some("So11111111111111111111111111111111111111112".to_string()),
            out_token_address: Some("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v".to_string()),
            slippage: Some(1.0),
            routes_filters: None,
            swap_amount: Some(jupiter_swap_task::SwapAmount::BaseAmountString(
                "1000000000".to_string(),
            )),
        };
        let oracle_job = OracleJob {
            tasks: vec![Task {
                task: Some(task::Task::JupiterSwapTask(jupiter_swap_task)),
            }],
        };

        let runner = TaskRunner::new(None);
        let result = runner.run_oracle_job(&oracle_job).await.unwrap();
        let result_f64: f64 = result.try_into().unwrap();

        println!("result: {:?}", result_f64);
        assert!(result_f64 > 0.0);
    }
}
