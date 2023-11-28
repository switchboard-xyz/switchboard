/// / Represnts a list of tasks to be performed by a switchboard oracle.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct OracleJob {
    /// / The chain of tasks to perform for this OracleJob.
    #[prost(message, repeated, tag = "1")]
    pub tasks: ::prost::alloc::vec::Vec<oracle_job::Task>,
}
/// Nested message and enum types in `OracleJob`.
pub mod oracle_job {
    /// The adapter will report the text body of a successful HTTP request to the
    /// specified url, or return an error if the response status code is greater
    /// than or equal to 400.
    ///
    /// ***Input***: None
    ///
    /// ***Returns***: String representation of the http response.
    ///
    /// ***Example***: Basic HttpTask
    ///
    /// ```text,json
    /// {"httpTask": {"url": "<https://mywebsite.org/path"}> }
    /// ```
    ///
    /// ***Example***: HttpTask example with headers
    ///
    /// ```text,json
    /// { "httpTask": { "url": "<https://mywebsite.org/path",> "method": "METHOD_POST", "headers": \[ { "key": "MY_HEADER_KEY", "value": "MY_HEADER_VALUE" } \], "body": "{\"MY_BODY_KEY\":\"MY_BODY_VALUE\"}" } }
    /// ```
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct HttpTask {
        /// / A string containing the URL to direct this HTTP request to.
        #[prost(string, optional, tag = "1")]
        pub url: ::core::option::Option<::prost::alloc::string::String>,
        /// / The type of HTTP request to make.
        #[prost(enumeration = "http_task::Method", optional, tag = "2")]
        pub method: ::core::option::Option<i32>,
        /// / A list of headers to add to this HttpTask.
        #[prost(message, repeated, tag = "3")]
        pub headers: ::prost::alloc::vec::Vec<http_task::Header>,
        /// / A stringified body (if any) to add to this HttpTask.
        #[prost(string, optional, tag = "4")]
        pub body: ::core::option::Option<::prost::alloc::string::String>,
    }
    /// Nested message and enum types in `HttpTask`.
    pub mod http_task {
        /// / An object that represents a header to add to an HTTP request.
        #[allow(clippy::derive_partial_eq_without_eq)]
        #[derive(Clone, PartialEq, ::prost::Message)]
        pub struct Header {
            /// / A header key such as `Authorization` or `Content-Type`
            #[prost(string, optional, tag = "1")]
            pub key: ::core::option::Option<::prost::alloc::string::String>,
            /// / A value for the given header key like `Basic MYAUTHKEY` or `application/json`
            #[prost(string, optional, tag = "2")]
            pub value: ::core::option::Option<::prost::alloc::string::String>,
        }
        /// / An enumeration representing the types of HTTP requests available to make.
        #[derive(
            Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration,
        )]
        #[repr(i32)]
        pub enum Method {
            /// / Unset HTTP method will default to METHOD_GET
            Unkown = 0,
            /// / Perform an HTTP 'GET' request.
            Get = 1,
            /// / Perform an HTTP 'POST' request.
            Post = 2,
        }
        impl Method {
            /// String value of the enum field names used in the ProtoBuf definition.
            ///
            /// The values are not transformed in any way and thus are considered stable
            /// (if the ProtoBuf definition does not change) and safe for programmatic use.
            pub fn as_str_name(&self) -> &'static str {
                match self {
                    Method::Unkown => "METHOD_UNKOWN",
                    Method::Get => "METHOD_GET",
                    Method::Post => "METHOD_POST",
                }
            }
            /// Creates an enum from field names used in the ProtoBuf definition.
            pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
                match value {
                    "METHOD_UNKOWN" => Some(Self::Unkown),
                    "METHOD_GET" => Some(Self::Get),
                    "METHOD_POST" => Some(Self::Post),
                    _ => None,
                }
            }
        }
    }
    /// The adapter walks the path specified and returns the value found at that result. If returning
    /// JSON data from the HttpGet or HttpPost adapters, you must use this adapter to parse the response.
    ///
    /// ***Input***: String representation of a JSON object.
    ///
    /// ***Returns***: A numerical result.
    ///
    /// ***Example***: Parses the price field from a JSON object
    ///
    /// ```text,json
    /// {"jsonParse": {"path": "$.price"} }
    /// ```
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct JsonParseTask {
        /// / JSONPath formatted path to the element. <https://t.ly/uLtw>
        /// / <https://www.npmjs.com/package/jsonpath-plus>
        #[prost(string, optional, tag = "1")]
        pub path: ::core::option::Option<::prost::alloc::string::String>,
        /// / The technique that will be used to aggregate the results if walking the specified path returns multiple numerical results.
        #[prost(
            enumeration = "json_parse_task::AggregationMethod",
            optional,
            tag = "2"
        )]
        pub aggregation_method: ::core::option::Option<i32>,
    }
    /// Nested message and enum types in `JsonParseTask`.
    pub mod json_parse_task {
        /// / The methods of combining a list of numerical results.
        #[derive(
            Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration,
        )]
        #[repr(i32)]
        pub enum AggregationMethod {
            None = 0,
            /// / Grab the minimum value of the results.
            Min = 1,
            /// / Grab the maximum value of the results.
            Max = 2,
            /// / Sum up all of the results.
            Sum = 3,
            /// / Average all of the results.
            Mean = 4,
            /// / Grab the median of the results.
            Median = 5,
        }
        impl AggregationMethod {
            /// String value of the enum field names used in the ProtoBuf definition.
            ///
            /// The values are not transformed in any way and thus are considered stable
            /// (if the ProtoBuf definition does not change) and safe for programmatic use.
            pub fn as_str_name(&self) -> &'static str {
                match self {
                    AggregationMethod::None => "NONE",
                    AggregationMethod::Min => "MIN",
                    AggregationMethod::Max => "MAX",
                    AggregationMethod::Sum => "SUM",
                    AggregationMethod::Mean => "MEAN",
                    AggregationMethod::Median => "MEDIAN",
                }
            }
            /// Creates an enum from field names used in the ProtoBuf definition.
            pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
                match value {
                    "NONE" => Some(Self::None),
                    "MIN" => Some(Self::Min),
                    "MAX" => Some(Self::Max),
                    "SUM" => Some(Self::Sum),
                    "MEAN" => Some(Self::Mean),
                    "MEDIAN" => Some(Self::Median),
                    _ => None,
                }
            }
        }
    }
    /// Returns the median (middle) of all the results returned by the provided subtasks and subjobs. Nested tasks must return a Number.
    ///
    /// ***Input***: None
    ///
    /// ***Returns***: A numerical result.
    ///
    /// ***Example***: Returns the median numerical result of 3 tasks.
    ///
    /// ```text,json
    /// {"medianTask": {"tasks": \[{"valueTask": {"value": 10}},{"valueTask": {"value": 20}},{"valueTask": {"value": 30}}\]}}
    /// ```
    ///
    /// ***Example***: Returns the median numerical result of 3 jobs.
    ///
    /// ```text,json
    /// {"medianTask": {"jobs": \[{"tasks": [{"httpTask": {"url": "<https://www.binance.com/api/v3/ticker/price?symbol=SOLUSDT"}},{"jsonParseTask":> {"path": "$.price"}}\]},{"tasks": \[{"httpTask": {"url": "<https://www.binance.us/api/v3/ticker/price?symbol=SOLUSD"}},{"jsonParseTask":> {"path": "$.price"}}\]},{"tasks": [{"httpTask": {"url": "<https://api-pub.bitfinex.com/v2/tickers?symbols=tSOLUSD"}},{"jsonParseTask":> {"path": "$[0][7]"}}]}]}}
    /// ```
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct MedianTask {
        /// / A list of subtasks to process and produce a list of result values.
        #[prost(message, repeated, tag = "1")]
        pub tasks: ::prost::alloc::vec::Vec<Task>,
        /// / A list of subjobs to process and produce a list of result values.
        #[prost(message, repeated, tag = "2")]
        pub jobs: ::prost::alloc::vec::Vec<super::OracleJob>,
        /// / The minimum number of values before a successful median can be yielded.
        #[prost(int32, optional, tag = "3")]
        pub min_successful_required: ::core::option::Option<i32>,
    }
    /// Returns the mean (average) of all the results returned by the provided subtasks and subjobs. Nested tasks or jobs must return a Number.
    ///
    /// ***Input***: None
    ///
    /// ***Returns***: A numerical result.
    ///
    /// ***Example***: Returns the mean numerical result of 3 tasks.
    ///
    /// ```text,json
    /// {"meanTask": {"tasks": \[{"valueTask": {"value": 10}},{"valueTask": {"value": 20}},{"valueTask": {"value": 30}}\]}}
    /// ```
    ///
    /// ***Example***: Returns the mean numerical result of 3 jobs.
    ///
    /// ```text,json
    /// {"meanTask": {"jobs": \[{"tasks": [{"httpTask": {"url": "<https://www.binance.com/api/v3/ticker/price?symbol=SOLUSDT"}},{"jsonParseTask":> {"path": "$.price"}}\]},{"tasks": \[{"httpTask": {"url": "<https://www.binance.us/api/v3/ticker/price?symbol=SOLUSD"}},{"jsonParseTask":> {"path": "$.price"}}\]},{"tasks": [{"httpTask": {"url": "<https://api-pub.bitfinex.com/v2/tickers?symbols=tSOLUSD"}},{"jsonParseTask":> {"path": "$[0][7]"}}]}]}}
    /// ```
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct MeanTask {
        /// / A list of subtasks to process and produce a list of result values.
        #[prost(message, repeated, tag = "1")]
        pub tasks: ::prost::alloc::vec::Vec<Task>,
        /// / A list of subjobs to process and produce a list of result values.
        #[prost(message, repeated, tag = "2")]
        pub jobs: ::prost::alloc::vec::Vec<super::OracleJob>,
    }
    /// Returns the maximum value of all the results returned by the provided subtasks and subjobs. Nested tasks or jobs must return a Number.
    ///
    /// ***Input***: None
    ///
    /// ***Returns***: A numerical result.
    ///
    /// ***Example***: Returns the maximum numerical result from 3 tasks.
    ///
    /// ```text,json
    /// {"maxTask": {"tasks": \[{"valueTask": {"value": 10}},{"valueTask": {"value": 20}},{"valueTask": {"value": 30}}\]}}
    /// ```
    ///
    /// ***Example***: Returns the maximum numerical result from 3 jobs.
    ///
    /// ```text,json
    /// {"maxTask": {"jobs": \[{"tasks": [{"httpTask": {"url": "<https://www.binance.com/api/v3/ticker/price?symbol=SOLUSDT"}},{"jsonParseTask":> {"path": "$.price"}}\]},{"tasks": \[{"httpTask": {"url": "<https://www.binance.us/api/v3/ticker/price?symbol=SOLUSD"}},{"jsonParseTask":> {"path": "$.price"}}\]},{"tasks": [{"httpTask": {"url": "<https://api-pub.bitfinex.com/v2/tickers?symbols=tSOLUSD"}},{"jsonParseTask":> {"path": "$[0][7]"}}]}]}}
    /// ```
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct MaxTask {
        /// / A list of subtasks to process and produce a list of result values.
        #[prost(message, repeated, tag = "1")]
        pub tasks: ::prost::alloc::vec::Vec<Task>,
        /// / A list of subjobs to process and produce a list of result values.
        #[prost(message, repeated, tag = "2")]
        pub jobs: ::prost::alloc::vec::Vec<super::OracleJob>,
    }
    /// Returns the minimum value of all the results returned by the provided subtasks and subjobs. Nested tasks or jobs must return a Number.
    ///
    /// ***Input***: None
    ///
    /// ***Returns***: A numerical result.
    ///
    /// ***Example***: Returns the minimum numerical result from 3 tasks.
    ///
    /// ```text,json
    /// {"minTask": {"tasks": \[{"valueTask": {"value": 10}},{"valueTask": {"value": 20}},{"valueTask": {"value": 30}}\]}}
    /// ```
    ///
    /// ***Example***: Returns the minimum numerical result from 3 jobs.
    ///
    /// ```text,json
    /// {"minTask": {"jobs": \[{"tasks": [{"httpTask": {"url": "<https://www.binance.com/api/v3/ticker/price?symbol=SOLUSDT"}},{"jsonParseTask":> {"path": "$.price"}}\]},{"tasks": \[{"httpTask": {"url": "<https://www.binance.us/api/v3/ticker/price?symbol=SOLUSD"}},{"jsonParseTask":> {"path": "$.price"}}\]},{"tasks": [{"httpTask": {"url": "<https://api-pub.bitfinex.com/v2/tickers?symbols=tSOLUSD"}},{"jsonParseTask":> {"path": "$[0][7]"}}]}]}}
    /// ```
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct MinTask {
        /// / A list of subtasks to process and produce a list of result values.
        #[prost(message, repeated, tag = "1")]
        pub tasks: ::prost::alloc::vec::Vec<Task>,
        /// / A list of subjobs to process and produce a list of result values.
        #[prost(message, repeated, tag = "2")]
        pub jobs: ::prost::alloc::vec::Vec<super::OracleJob>,
    }
    /// Returns a specified value.
    ///
    /// ***Input***: None
    ///
    /// ***Returns***: A numerical result.
    ///
    /// ***Example***: Returns the value 10
    ///
    /// ```text,json
    /// {"valueTask": {"value": 10} }
    /// ```
    ///
    /// ***Example***: Returns the currentRound result of an aggregator
    ///
    /// ```text,json
    /// {"valueTask": {"aggregatorPubkey": "GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR"} }
    /// ```
    ///
    /// ***Example***: Returns the value stored in a CacheTask variable
    ///
    /// ```text,json
    /// {"valueTask": {"big": "${ONE}"} }
    /// ```
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct ValueTask {
        #[prost(oneof = "value_task::Value", tags = "1, 2, 3")]
        pub value: ::core::option::Option<value_task::Value>,
    }
    /// Nested message and enum types in `ValueTask`.
    pub mod value_task {
        #[allow(clippy::derive_partial_eq_without_eq)]
        #[derive(Clone, PartialEq, ::prost::Oneof)]
        pub enum Value {
            /// / The value that will be returned from this task.
            #[prost(double, tag = "1")]
            Value(f64),
            /// / Specifies an aggregatorr to pull the value of.
            #[prost(string, tag = "2")]
            AggregatorPubkey(::prost::alloc::string::String),
            /// / A stringified big.js. `Accepts variable expansion syntax.`
            #[prost(string, tag = "3")]
            Big(::prost::alloc::string::String),
        }
    }
    /// Opens and maintains a websocket for light speed data retrieval.
    ///
    /// ***Input***: None
    ///
    /// ***Returns***: String representation of the websocket subscription message.
    ///
    /// ***Example***: Opens a coinbase websocket
    ///
    /// ```text,json
    /// { "websocketTask": { "url": "wss://ws-feed.pro.coinbase.com", "subscription": "{\"type\":\"subscribe\",\"product_ids\":\[\"BTC-USD\"\],\"channels\":\[\"ticker\",{\"name\":\"ticker\",\"product_ids\":[\"BTC-USD\"\]}]}", "maxDataAgeSeconds": 15, "filter": "$\[?(@.type == 'ticker' && @.product_id == 'BTC-USD')\]" } }
    /// ```
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct WebsocketTask {
        /// / The websocket url.
        #[prost(string, optional, tag = "1")]
        pub url: ::core::option::Option<::prost::alloc::string::String>,
        /// / The websocket message to notify of a new subscription.
        #[prost(string, optional, tag = "2")]
        pub subscription: ::core::option::Option<::prost::alloc::string::String>,
        /// / Minimum amount of time required between when the horses are taking out.
        #[prost(int32, optional, tag = "3")]
        pub max_data_age_seconds: ::core::option::Option<i32>,
        /// / Incoming message JSONPath filter.
        /// / Example: "$\[?(@.channel == 'ticker' && @.market == 'BTC/USD')\]"
        #[prost(string, optional, tag = "4")]
        pub filter: ::core::option::Option<::prost::alloc::string::String>,
    }
    /// This task will run the `attempt` on the subtasks in an effort to produce a valid numerical result. If `attempt`. fails to produce an acceptable result, `on_failure` subtasks will be run instead.
    ///
    /// ***Input***: The current running numerical result output from a task.
    ///
    /// ***Returns***: A numerical result, else run `on_failure` subtasks.
    ///
    /// ***Example***: Returns the numerical result from the conditionalTask's subtasks, else `on_failure` returns the numerical result from its subtasks.
    ///
    /// ```text,json
    /// {"conditionalTask":{"attempt":\[{"tasks":[{"jupiterSwapTask":{"inTokenAddress":"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v","outTokenAddress":"DUALa4FC2yREwZ59PHeu1un4wis36vHRv5hWVBmzykCJ"}}\]}],"onFailure":\[{"lpExchangeRateTask":{"orcaPoolAddress":"7yJ4gMRJhEoCR48aPE3EAWRmCoygakik81ZS1sajaTnE"}}\]}}
    /// ```
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct ConditionalTask {
        /// / A list of subtasks to process in an attempt to produce a valid numerical result.
        #[prost(message, repeated, tag = "1")]
        pub attempt: ::prost::alloc::vec::Vec<Task>,
        /// / A list of subtasks that will be run if `attempt` subtasks are unable to produce an acceptable
        /// / result.
        #[prost(message, repeated, tag = "2")]
        pub on_failure: ::prost::alloc::vec::Vec<Task>,
    }
    /// This task will divide a numerical input by a scalar value from a job of subtasks, an aggregator, or a big.
    ///
    /// ***Input***: The current running numerical result output from a scalar value, an aggregator, a job of subtasks or a big.
    ///
    /// ***Returns***: A numerical result.
    ///
    /// ***Example***: Returns the numerical result by dividing by a job of subtasks.
    ///
    /// ```text,json
    /// {"tasks":\[{"valueTask":{"value":100}},{"divideTask":{"job":{"tasks":[{"valueTask":{"value":10}}\]}}}]}
    /// ```
    ///
    /// ***Example***: Returns the numerical result by dividing by an aggregator.
    ///
    /// ```text,json
    /// {"tasks":\[{"valueTask":{"value":100}},{"divideTask":{"aggregatorPubkey":"GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR"}}\]}
    /// ```
    ///
    /// ***Example***: Returns the numerical result by dividing by a big.
    ///
    /// ```text,json
    /// {"tasks":\[{"cacheTask":{"cacheItems":[{"variableName":"TEN","job":{"tasks":[{"valueTask":{"value":10}}\]}}]}},{"valueTask":{"value":100}},{"divideTask":{"big":"${TEN}"}}]}
    /// ```
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct DivideTask {
        #[prost(oneof = "divide_task::Denominator", tags = "1, 2, 3, 4")]
        pub denominator: ::core::option::Option<divide_task::Denominator>,
    }
    /// Nested message and enum types in `DivideTask`.
    pub mod divide_task {
        #[allow(clippy::derive_partial_eq_without_eq)]
        #[derive(Clone, PartialEq, ::prost::Oneof)]
        pub enum Denominator {
            /// / Specifies a basic scalar denominator to divide by.
            #[prost(double, tag = "1")]
            Scalar(f64),
            /// / Specifies another aggregator resut to divide by.
            #[prost(string, tag = "2")]
            AggregatorPubkey(::prost::alloc::string::String),
            /// / A job whose result is computed before dividing our numerical input by that result.
            #[prost(message, tag = "3")]
            Job(super::super::OracleJob),
            /// / A stringified big.js. `Accepts variable expansion syntax.`
            #[prost(string, tag = "4")]
            Big(::prost::alloc::string::String),
        }
    }
    /// This task will multiply a numerical input by a scalar value from a job of subtasks, an aggregator, or a big.
    ///
    /// ***Input***: The current running numerical result output from a scalar value, an aggregator, a job of subtasks or a big.
    ///
    /// ***Returns***: A numerical result.
    ///
    /// ***Example***: Returns the numerical result by multiplying by a job of subtasks.
    ///
    /// ```text,json
    /// {"tasks":\[{"valueTask":{"value":100}},{"multiplyTask":{"job":{"tasks":[{"valueTask":{"value":10}}\]}}}]}
    /// ```
    ///
    /// ***Example***: Returns the numerical result by multiplying by an aggregator.
    ///
    /// ```text,json
    /// {"tasks":\[{"valueTask":{"value":100}},{"multiplyTask":{"aggregatorPubkey":"GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR"}}\]}
    /// ```
    ///
    /// ***Example***: Returns the numerical result by multiplying by a big.
    ///
    /// ```text,json
    /// {"tasks":\[{"cacheTask":{"cacheItems":[{"variableName":"TEN","job":{"tasks":[{"valueTask":{"value":10}}\]}}]}},{"valueTask":{"value":100}},{"multiplyTask":{"big":"${TEN}"}}]}
    /// ```
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct MultiplyTask {
        #[prost(oneof = "multiply_task::Multiple", tags = "1, 2, 3, 4")]
        pub multiple: ::core::option::Option<multiply_task::Multiple>,
    }
    /// Nested message and enum types in `MultiplyTask`.
    pub mod multiply_task {
        #[allow(clippy::derive_partial_eq_without_eq)]
        #[derive(Clone, PartialEq, ::prost::Oneof)]
        pub enum Multiple {
            /// / Specifies a scalar to multiply by.
            #[prost(double, tag = "1")]
            Scalar(f64),
            /// / Specifies an aggregator to multiply by.
            #[prost(string, tag = "2")]
            AggregatorPubkey(::prost::alloc::string::String),
            /// / A job whose result is computed before multiplying our numerical input by that result.
            #[prost(message, tag = "3")]
            Job(super::super::OracleJob),
            /// / A stringified big.js. `Accepts variable expansion syntax.`
            #[prost(string, tag = "4")]
            Big(::prost::alloc::string::String),
        }
    }
    /// This task will add a numerical input by a scalar value from a job of subtasks, an aggregator, or a big.
    ///
    /// ***Input***: The current running numerical result output from a scalar value, an aggregator, a job of subtasks or a big.
    ///
    /// ***Returns***: A numerical result.
    ///
    /// ***Example***: Returns the numerical result by adding by a job of subtasks.
    ///
    /// ```text,json
    /// {"tasks":\[{"valueTask":{"value":100}},{"addTask":{"job":{"tasks":[{"valueTask":{"value":10}}\]}}}]}
    /// ```
    ///
    /// ***Example***: Returns the numerical result by multiplying by an aggregator.
    ///
    /// ```text,json
    /// {"tasks":\[{"valueTask":{"value":100}},{"addTask":{"aggregatorPubkey":"GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR"}}\]}
    /// ```
    ///
    /// ***Example***: Returns the numerical result by multiplying by a big.
    ///
    /// ```text,json
    /// {"tasks":\[{"cacheTask":{"cacheItems":[{"variableName":"TEN","job":{"tasks":[{"valueTask":{"value":10}}\]}}]}},{"valueTask":{"value":100}},{"addTask":{"big":"${TEN}"}}]}
    /// ```
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct AddTask {
        #[prost(oneof = "add_task::Addition", tags = "1, 2, 3, 4")]
        pub addition: ::core::option::Option<add_task::Addition>,
    }
    /// Nested message and enum types in `AddTask`.
    pub mod add_task {
        #[allow(clippy::derive_partial_eq_without_eq)]
        #[derive(Clone, PartialEq, ::prost::Oneof)]
        pub enum Addition {
            /// / Specifies a scalar to add by.
            #[prost(double, tag = "1")]
            Scalar(f64),
            /// / Specifies an aggregator to add by.
            #[prost(string, tag = "2")]
            AggregatorPubkey(::prost::alloc::string::String),
            /// / A job whose result is computed before adding our numerical input by that result.
            #[prost(message, tag = "3")]
            Job(super::super::OracleJob),
            /// / A stringified big.js. `Accepts variable expansion syntax.`
            #[prost(string, tag = "4")]
            Big(::prost::alloc::string::String),
        }
    }
    /// This task will subtract a numerical input by a scalar value from a job of subtasks, an aggregator, or a big.
    ///
    /// ***Input***: The current running numerical result output from a scalar value, an aggregator, a job of subtasks or a big.
    ///
    /// ***Returns***: A numerical result.
    ///
    /// ***Example***: Returns the numerical result by subtracting by a job of subtasks.
    ///
    /// ```text,json
    /// {"tasks":\[{"valueTask":{"value":100}},{"subtractTask":{"job":{"tasks":[{"valueTask":{"value":10}}\]}}}]}
    /// ```
    ///
    /// ***Example***: Returns the numerical result by multiplying by an aggregator.
    ///
    /// ```text,json
    /// {"tasks":\[{"valueTask":{"value":100}},{"subtractTask":{"aggregatorPubkey":"GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR"}}\]}
    /// ```
    ///
    /// ***Example***: Returns the numerical result by multiplying by a big.
    ///
    /// ```text,json
    /// {"tasks":\[{"cacheTask":{"cacheItems":[{"variableName":"TEN","job":{"tasks":[{"valueTask":{"value":10}}\]}}]}},{"valueTask":{"value":100}},{"subtractTask":{"big":"${TEN}"}}]}
    /// ```
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct SubtractTask {
        #[prost(oneof = "subtract_task::Subtraction", tags = "1, 2, 3, 4")]
        pub subtraction: ::core::option::Option<subtract_task::Subtraction>,
    }
    /// Nested message and enum types in `SubtractTask`.
    pub mod subtract_task {
        #[allow(clippy::derive_partial_eq_without_eq)]
        #[derive(Clone, PartialEq, ::prost::Oneof)]
        pub enum Subtraction {
            /// / Specifies a scalar to subtract by.
            #[prost(double, tag = "1")]
            Scalar(f64),
            /// / Specifies an aggregator to subtract by.
            #[prost(string, tag = "2")]
            AggregatorPubkey(::prost::alloc::string::String),
            /// / A job whose result is computed before subtracting our numerical input by that result.
            #[prost(message, tag = "3")]
            Job(super::super::OracleJob),
            /// / A stringified big.js. `Accepts variable expansion syntax.`
            #[prost(string, tag = "4")]
            Big(::prost::alloc::string::String),
        }
    }
    /// Fetch LP token price info from a number of supported exchanges.
    ///
    /// See our blog post on [Fair LP Token Oracles](/blog/2022/01/20/Fair-LP-Token-Oracles)
    ///
    /// *NOTE*\*: This is not the swap price but the price of the underlying LP token.
    ///
    /// ***Input***: None
    ///
    /// ***Returns***: The price of an LP token for a given AMM pool.
    ///
    /// ***Example***: Fetch the Orca LP token price of the SOL/USDC pool
    ///
    /// ```text,json
    /// { "lpTokenPriceTask": { "orcaPoolAddress": "APDFRM3HMr8CAGXwKHiu2f5ePSpaiEJhaURwhsRrUUt9" } }
    /// ```
    ///
    /// ***Example***: Fetch the fair price Orca LP token price of the SOL/USDC pool
    ///
    /// ```text,json
    /// { "lpTokenPriceTask": { "orcaPoolAddress": "APDFRM3HMr8CAGXwKHiu2f5ePSpaiEJhaURwhsRrUUt9", "useFairPrice": true, "priceFeedAddresses": \[ "GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR", "BjUgj6YCnFBZ49wF54ddBVA9qu8TeqkFtkbqmZcee8uW" \] } }
    /// ```
    ///
    /// ***Example***: Fetch the fair price Raydium LP token price of the SOL/USDC pool
    ///
    /// ```text,json
    /// { "lpTokenPriceTask": { "raydiumPoolAddress": "58oQChx4yWmvKdwLLZzBi4ChoCc2fqCUWBkwMihLYQo2", "useFairPrice": true,"priceFeedAddresses": \["GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR","BjUgj6YCnFBZ49wF54ddBVA9qu8TeqkFtkbqmZcee8uW" \] } }
    /// ```
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct LpTokenPriceTask {
        /// / A list of Switchboard aggregator accounts used to calculate the fair LP price. This ensures the price is based on the previous round to mitigate flash loan price manipulation.
        #[prost(string, repeated, tag = "5")]
        pub price_feed_addresses: ::prost::alloc::vec::Vec<::prost::alloc::string::String>,
        /// / A list of OracleJobs to execute in order to yield the price feed jobs to use for the fair price formula.
        #[prost(message, repeated, tag = "6")]
        pub price_feed_jobs: ::prost::alloc::vec::Vec<super::OracleJob>,
        /// / If enabled and price_feed_addresses provided, the oracle will calculate the fair LP price based on the liquidity pool reserves. See our blog post for more information: <https://switchboardxyz.medium.com/fair-lp-token-oracles-94a457c50239>
        #[prost(bool, optional, tag = "7")]
        pub use_fair_price: ::core::option::Option<bool>,
        #[prost(oneof = "lp_token_price_task::PoolAddress", tags = "1, 2, 3, 4")]
        pub pool_address: ::core::option::Option<lp_token_price_task::PoolAddress>,
    }
    /// Nested message and enum types in `LpTokenPriceTask`.
    pub mod lp_token_price_task {
        #[allow(clippy::derive_partial_eq_without_eq)]
        #[derive(Clone, PartialEq, ::prost::Oneof)]
        pub enum PoolAddress {
            /// / Mercurial finance pool address. A full list can be found here: <https://github.com/mercurial-finance/stable-swap-n-pool-js>
            #[prost(string, tag = "1")]
            MercurialPoolAddress(::prost::alloc::string::String),
            /// / Saber pool address. A full list can be found here: <https://github.com/saber-hq/saber-registry-dist>
            #[prost(string, tag = "2")]
            SaberPoolAddress(::prost::alloc::string::String),
            /// / Orca pool address. A full list can be found here: <https://www.orca.so/pools>
            #[prost(string, tag = "3")]
            OrcaPoolAddress(::prost::alloc::string::String),
            /// / The Raydium liquidity pool ammId. A full list can be found here: <https://sdk.raydium.io/liquidity/mainnet.json>
            #[prost(string, tag = "4")]
            RaydiumPoolAddress(::prost::alloc::string::String),
        }
    }
    /// Fetch the current swap price for a given liquidity pool
    ///
    /// ***Input***: None
    ///
    /// ***Returns***: The swap price for a given AMM pool.
    ///
    /// ***Example***: Fetch the exchange rate from the Orca SOL/USDC pool
    ///
    /// ```text,json
    /// { "lpExchangeRateTask": { "orcaPoolAddress": "APDFRM3HMr8CAGXwKHiu2f5ePSpaiEJhaURwhsRrUUt9" } }
    /// ```
    ///
    /// ***Example***: Fetch the exchange rate from the Raydium SOL/USDC pool
    ///
    /// ```text,json
    /// { "lpExchangeRateTask": { "raydiumPoolAddress": "58oQChx4yWmvKdwLLZzBi4ChoCc2fqCUWBkwMihLYQo2" } }
    /// ```
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct LpExchangeRateTask {
        /// / Used alongside mercurial_pool_address to specify the input token for a swap.
        #[prost(string, optional, tag = "1")]
        pub in_token_address: ::core::option::Option<::prost::alloc::string::String>,
        /// / Used alongside mercurial_pool_address to specify the output token for a swap.
        #[prost(string, optional, tag = "2")]
        pub out_token_address: ::core::option::Option<::prost::alloc::string::String>,
        #[prost(
            oneof = "lp_exchange_rate_task::PoolAddress",
            tags = "3, 4, 5, 6, 7, 8"
        )]
        pub pool_address: ::core::option::Option<lp_exchange_rate_task::PoolAddress>,
    }
    /// Nested message and enum types in `LpExchangeRateTask`.
    pub mod lp_exchange_rate_task {
        #[allow(clippy::derive_partial_eq_without_eq)]
        #[derive(Clone, PartialEq, ::prost::Oneof)]
        pub enum PoolAddress {
            /// / Mercurial finance pool address. A full list can be found here: <https://github.com/mercurial-finance/stable-swap-n-pool-js>
            #[prost(string, tag = "3")]
            MercurialPoolAddress(::prost::alloc::string::String),
            /// / Saber pool address. A full list can be found here: <https://github.com/saber-hq/saber-registry-dist>
            #[prost(string, tag = "4")]
            SaberPoolAddress(::prost::alloc::string::String),
            /// / **@deprecated** Use orcaPoolAddress
            #[prost(string, tag = "5")]
            OrcaPoolTokenMintAddress(::prost::alloc::string::String),
            /// / The Raydium liquidity pool ammId. A full list can be found here: <https://sdk.raydium.io/liquidity/mainnet.json>
            #[prost(string, tag = "6")]
            RaydiumPoolAddress(::prost::alloc::string::String),
            /// / Pool address for an Orca LP pool or whirlpool.
            /// / A full list of Orca LP pools can be found here: <https://www.orca.so/pools>
            #[prost(string, tag = "7")]
            OrcaPoolAddress(::prost::alloc::string::String),
            /// / The Port reserve pubkey. A full list can be found here: <https://api-v1.port.finance/reserves>
            #[prost(string, tag = "8")]
            PortReserveAddress(::prost::alloc::string::String),
        }
    }
    /// / Find a pattern within a string of a previous task and extract a group number.
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct RegexExtractTask {
        /// / Regex pattern to find.
        #[prost(string, optional, tag = "1")]
        pub pattern: ::core::option::Option<::prost::alloc::string::String>,
        /// / Group number to extract.
        #[prost(int32, optional, tag = "2")]
        pub group_number: ::core::option::Option<i32>,
    }
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct XStepPriceTask {
        #[prost(oneof = "x_step_price_task::StepSource", tags = "1, 2")]
        pub step_source: ::core::option::Option<x_step_price_task::StepSource>,
    }
    /// Nested message and enum types in `XStepPriceTask`.
    pub mod x_step_price_task {
        #[allow(clippy::derive_partial_eq_without_eq)]
        #[derive(Clone, PartialEq, ::prost::Oneof)]
        pub enum StepSource {
            /// / median task containing the job definitions to fetch the STEP/USD price
            #[prost(message, tag = "1")]
            StepJob(super::MedianTask),
            /// / existing aggregator pubkey for STEP/USD
            #[prost(string, tag = "2")]
            StepAggregatorPubkey(::prost::alloc::string::String),
        }
    }
    /// Takes a twap over a set period for a certain aggregator. Aggregators have an optional history buffer account storing the last N accepted results. The TwapTask will iterate over an aggregators history buffer and calculate the time weighted average of the samples within a given time period.
    ///
    /// ***Input***: None
    ///
    /// ***Returns***: The time weighted average of an aggregator over a given time period.
    ///
    /// ***Example***: The 1hr Twap of the SOL/USD Aggregator, requiring at least 60 samples.
    ///
    /// ```text,json
    /// { "twapTask": { "aggregatorPubkey": "GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR", "period": 3600, "minSamples": 60, "weightByPropagationTime": true  } }
    /// ```
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct TwapTask {
        /// / The target aggregator for the TWAP.
        #[prost(string, optional, tag = "1")]
        pub aggregator_pubkey: ::core::option::Option<::prost::alloc::string::String>,
        /// / Period, in seconds, the twap should account for
        #[prost(int32, optional, tag = "2")]
        pub period: ::core::option::Option<i32>,
        /// / Weight samples by their propagation time
        #[prost(bool, optional, tag = "3")]
        pub weight_by_propagation_time: ::core::option::Option<bool>,
        /// / Minimum number of samples in the history to calculate a valid result
        #[prost(uint32, optional, tag = "4")]
        pub min_samples: ::core::option::Option<u32>,
        /// / Ending unix timestamp to collect values up to
        #[prost(int32, optional, tag = "5")]
        pub ending_unix_timestamp: ::core::option::Option<i32>,
        /// / Execute the task to get the ending unix timestamp
        #[prost(message, optional, tag = "6")]
        pub ending_unix_timestamp_task: ::core::option::Option<CronParseTask>,
    }
    /// / Fetch the latest swap price on Serum's orderbook
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct SerumSwapTask {
        /// / The serum pool to fetch swap price for
        #[prost(string, optional, tag = "1")]
        pub serum_pool_address: ::core::option::Option<::prost::alloc::string::String>,
    }
    /// Round the current running result to an exponential power.
    ///
    /// ***Input***: The current running numerical result.
    ///
    /// ***Returns***: The input raised to an exponential power.
    ///
    /// ***Example***: Raise 2 to the power of 3, 2^3
    ///
    /// ```text,json
    /// {"tasks":\[{"valueTask":{"value":2}},{"powTask":{"scalar":3}}\]}
    /// ```
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct PowTask {
        #[prost(oneof = "pow_task::Exponent", tags = "1, 2, 3")]
        pub exponent: ::core::option::Option<pow_task::Exponent>,
    }
    /// Nested message and enum types in `PowTask`.
    pub mod pow_task {
        #[allow(clippy::derive_partial_eq_without_eq)]
        #[derive(Clone, PartialEq, ::prost::Oneof)]
        pub enum Exponent {
            /// / Take the working value to the exponent of value.
            #[prost(double, tag = "1")]
            Scalar(f64),
            /// / Take the working value to the exponent of the aggregators value.
            #[prost(string, tag = "2")]
            AggregatorPubkey(::prost::alloc::string::String),
            /// / A stringified big.js. `Accepts variable expansion syntax.`
            #[prost(string, tag = "3")]
            Big(::prost::alloc::string::String),
        }
    }
    /// / Fetch the lending rates for various Solana protocols
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct LendingRateTask {
        /// / 01, apricot, francium, jet, larix, mango, port, solend, tulip
        #[prost(string, optional, tag = "1")]
        pub protocol: ::core::option::Option<::prost::alloc::string::String>,
        /// / A token mint address supported by the chosen protocol
        #[prost(string, optional, tag = "2")]
        pub asset_mint: ::core::option::Option<::prost::alloc::string::String>,
        #[prost(enumeration = "lending_rate_task::Field", optional, tag = "3")]
        pub field: ::core::option::Option<i32>,
    }
    /// Nested message and enum types in `LendingRateTask`.
    pub mod lending_rate_task {
        #[derive(
            Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration,
        )]
        #[repr(i32)]
        pub enum Field {
            /// / deposit lending rate
            DepositRate = 0,
            /// / borrow lending rate
            BorrowRate = 1,
        }
        impl Field {
            /// String value of the enum field names used in the ProtoBuf definition.
            ///
            /// The values are not transformed in any way and thus are considered stable
            /// (if the ProtoBuf definition does not change) and safe for programmatic use.
            pub fn as_str_name(&self) -> &'static str {
                match self {
                    Field::DepositRate => "FIELD_DEPOSIT_RATE",
                    Field::BorrowRate => "FIELD_BORROW_RATE",
                }
            }
            /// Creates an enum from field names used in the ProtoBuf definition.
            pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
                match value {
                    "FIELD_DEPOSIT_RATE" => Some(Self::DepositRate),
                    "FIELD_BORROW_RATE" => Some(Self::BorrowRate),
                    _ => None,
                }
            }
        }
    }
    /// / Fetch the current price for a Mango perpetual market
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct MangoPerpMarketTask {
        /// / Mainnet address for a mango perpetual market. A full list can be found here: <https://github.com/blockworks-foundation/mango-client-v3/blob/main/src/ids.json>
        #[prost(string, optional, tag = "1")]
        pub perp_market_address: ::core::option::Option<::prost::alloc::string::String>,
    }
    /// Fetch the simulated price for a swap on JupiterSwap.
    ///
    /// ***Input***: None
    ///
    /// ***Returns***: The swap price on Jupiter for a given input and output token mint address.
    ///
    /// ***Example***: Fetch the JupiterSwap price for exchanging 1 SOL into USDC.
    ///
    /// ```text,json
    /// { "jupiterSwapTask": { "inTokenAddress": "So11111111111111111111111111111111111111112", "outTokenAddress": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v" } }
    /// ```
    ///
    /// ***Example***: Fetch the JupiterSwap price for exchanging 1000 SOL into USDC.
    ///
    /// ```text,json
    /// { "jupiterSwapTask": { "inTokenAddress": "So11111111111111111111111111111111111111112", "outTokenAddress": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", "baseAmount": "1000" } }
    /// ```
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct JupiterSwapTask {
        /// / The input token address.
        #[prost(string, optional, tag = "1")]
        pub in_token_address: ::core::option::Option<::prost::alloc::string::String>,
        /// / The output token address.
        #[prost(string, optional, tag = "2")]
        pub out_token_address: ::core::option::Option<::prost::alloc::string::String>,
        /// / The allowable slippage on the swap in decimal form (e.g. 0.5 is 0.5% slippage)
        #[prost(double, optional, tag = "9")]
        pub slippage: ::core::option::Option<f64>,
        #[prost(oneof = "jupiter_swap_task::RoutesFilters", tags = "4, 5")]
        pub routes_filters: ::core::option::Option<jupiter_swap_task::RoutesFilters>,
        #[prost(oneof = "jupiter_swap_task::SwapAmount", tags = "3, 6, 7, 8")]
        pub swap_amount: ::core::option::Option<jupiter_swap_task::SwapAmount>,
    }
    /// Nested message and enum types in `JupiterSwapTask`.
    pub mod jupiter_swap_task {
        #[allow(clippy::derive_partial_eq_without_eq)]
        #[derive(Clone, PartialEq, ::prost::Message)]
        pub struct FilterList {
            /// / A list of Jupiter AMM labels to allow or deny (e.g. 'Raydium', 'Orca')
            #[prost(string, repeated, tag = "1")]
            pub labels: ::prost::alloc::vec::Vec<::prost::alloc::string::String>,
        }
        #[allow(clippy::derive_partial_eq_without_eq)]
        #[derive(Clone, PartialEq, ::prost::Oneof)]
        pub enum RoutesFilters {
            /// / A list of AMM markets to allow.
            #[prost(message, tag = "4")]
            AllowList(FilterList),
            /// / A list of AMM markets to deny.
            #[prost(message, tag = "5")]
            DenyList(FilterList),
        }
        #[allow(clippy::derive_partial_eq_without_eq)]
        #[derive(Clone, PartialEq, ::prost::Oneof)]
        pub enum SwapAmount {
            /// / The amount of `in_token_address` tokens to swap.
            #[prost(double, tag = "3")]
            BaseAmount(f64),
            /// / The amount of `out_token_address` tokens to swap.
            #[prost(double, tag = "6")]
            QuoteAmount(f64),
            /// / The amount of `in_token_address` tokens to swap.
            #[prost(string, tag = "7")]
            BaseAmountString(::prost::alloc::string::String),
            /// / The amount of `out_token_address` tokens to swap.
            #[prost(string, tag = "8")]
            QuoteAmountString(::prost::alloc::string::String),
        }
    }
    /// / Fetch the current price of a perpetual market.
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct PerpMarketTask {
        #[prost(oneof = "perp_market_task::MarketAddress", tags = "1, 2, 3, 4")]
        pub market_address: ::core::option::Option<perp_market_task::MarketAddress>,
    }
    /// Nested message and enum types in `PerpMarketTask`.
    pub mod perp_market_task {
        #[allow(clippy::derive_partial_eq_without_eq)]
        #[derive(Clone, PartialEq, ::prost::Oneof)]
        pub enum MarketAddress {
            /// / Market address for a mango perpetual market. A full list can be found here: <https://github.com/blockworks-foundation/mango-client-v3/blob/main/src/ids.json>
            #[prost(string, tag = "1")]
            MangoMarketAddress(::prost::alloc::string::String),
            /// / Market address for a drift perpetual market. A full list can be found here: <https://github.com/drift-labs/protocol-v1/blob/master/sdk/src/constants/markets.ts>
            #[prost(string, tag = "2")]
            DriftMarketAddress(::prost::alloc::string::String),
            /// / Market address for a zeta perpetual market.
            #[prost(string, tag = "3")]
            ZetaMarketAddress(::prost::alloc::string::String),
            /// / Market address for a 01 protocol perpetual market.
            #[prost(string, tag = "4")]
            ZoMarketAddress(::prost::alloc::string::String),
        }
    }
    /// Fetch the current price of a Solana oracle protocol.
    ///
    /// ***Input***: None
    ///
    /// ***Returns***: The current price of an on-chain oracle.
    ///
    /// ***Example***: The Switchboard SOL/USD oracle price.
    ///
    /// ```text,json
    /// { "oracleTask": { "switchboardAddress": "GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR" } }
    /// ```
    ///
    /// ***Example***: The Pyth SOL/USD oracle price.
    ///
    /// ```text,json
    /// { "oracleTask": { "pythAddress": "H6ARHf6YXhGYeQfUzQNGk6rDNnLBQKrenN712K4AQJEG" } }
    /// ```
    ///
    /// ***Example***: The Chainlink SOL/USD oracle price.
    ///
    /// ```text,json
    /// { "oracleTask": { "chainlinkAddress": "CcPVS9bqyXbD9cLnTbhhHazLsrua8QMFUHTutPtjyDzq" } }
    /// ```
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct OracleTask {
        /// / Value (as a percentage) that the lower bound confidence interval is of the actual value.
        /// / Confidence intervals that are larger that this treshold are rejected.
        #[prost(double, optional, tag = "4")]
        pub pyth_allowed_confidence_interval: ::core::option::Option<f64>,
        #[prost(oneof = "oracle_task::AggregatorAddress", tags = "1, 2, 3")]
        pub aggregator_address: ::core::option::Option<oracle_task::AggregatorAddress>,
    }
    /// Nested message and enum types in `OracleTask`.
    pub mod oracle_task {
        #[allow(clippy::derive_partial_eq_without_eq)]
        #[derive(Clone, PartialEq, ::prost::Oneof)]
        pub enum AggregatorAddress {
            /// / Mainnet address of a Switchboard V2 feed. Switchboard is decentralized and allows anyone to build their own feed. A small subset of feeds is available here: <https://switchboard.xyz/explorer>
            #[prost(string, tag = "1")]
            SwitchboardAddress(::prost::alloc::string::String),
            /// / Mainnet address for a Pyth feed. A full list can be found here: <https://pyth.network/price-feeds/>
            #[prost(string, tag = "2")]
            PythAddress(::prost::alloc::string::String),
            /// / Mainnet address for a Chainlink feed. A full list can be found here: <https://docs.chain.link/docs/solana/data-feeds-solana>
            #[prost(string, tag = "3")]
            ChainlinkAddress(::prost::alloc::string::String),
        }
    }
    /// / Load a parse an Anchor based solana account.
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct AnchorFetchTask {
        /// / Owning program of the account to parse.
        #[prost(string, optional, tag = "1")]
        pub program_id: ::core::option::Option<::prost::alloc::string::String>,
        /// / The account to parse.
        #[prost(string, optional, tag = "2")]
        pub account_address: ::core::option::Option<::prost::alloc::string::String>,
    }
    /// / Fetch the current transactions per second.
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct TpsTask {}
    /// / Fetch the JSON representation of an SPL Stake Pool account.
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct SplStakePoolTask {
        /// / The pubkey of the SPL Stake Pool.
        #[prost(string, optional, tag = "1")]
        pub pubkey: ::core::option::Option<::prost::alloc::string::String>,
    }
    /// / Fetch the JSON representation of an SPL token mint.
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct SplTokenParseTask {
        #[prost(oneof = "spl_token_parse_task::AccountAddress", tags = "1, 2")]
        pub account_address: ::core::option::Option<spl_token_parse_task::AccountAddress>,
    }
    /// Nested message and enum types in `SplTokenParseTask`.
    pub mod spl_token_parse_task {
        #[allow(clippy::derive_partial_eq_without_eq)]
        #[derive(Clone, PartialEq, ::prost::Oneof)]
        pub enum AccountAddress {
            /// / The publicKey of a token account to fetch the mintInfo for.
            #[prost(string, tag = "1")]
            TokenAccountAddress(::prost::alloc::string::String),
            /// / The publicKey of the token mint address.
            #[prost(string, tag = "2")]
            MintAddress(::prost::alloc::string::String),
        }
    }
    /// / Fetch the swap price from DefiKingdoms.
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct DefiKingdomsTask {
        /// / The RPC provider to use for the swap.
        #[prost(string, optional, tag = "1")]
        pub provider: ::core::option::Option<::prost::alloc::string::String>,
        /// / The input token of the swap.
        #[prost(message, optional, tag = "2")]
        pub in_token: ::core::option::Option<defi_kingdoms_task::Token>,
        /// / The output token of the swap.
        #[prost(message, optional, tag = "3")]
        pub out_token: ::core::option::Option<defi_kingdoms_task::Token>,
    }
    /// Nested message and enum types in `DefiKingdomsTask`.
    pub mod defi_kingdoms_task {
        #[allow(clippy::derive_partial_eq_without_eq)]
        #[derive(Clone, PartialEq, ::prost::Message)]
        pub struct Token {
            /// / The address of the token.
            #[prost(string, optional, tag = "1")]
            pub address: ::core::option::Option<::prost::alloc::string::String>,
            /// / The number of decimal places for a token.
            #[prost(int32, optional, tag = "2")]
            pub decimals: ::core::option::Option<i32>,
        }
    }
    /// / Fetch the swap price from UniSwap.
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct UniswapExchangeRateTask {
        /// / The input token address.
        #[prost(string, optional, tag = "1")]
        pub in_token_address: ::core::option::Option<::prost::alloc::string::String>,
        /// / The output token address.
        #[prost(string, optional, tag = "2")]
        pub out_token_address: ::core::option::Option<::prost::alloc::string::String>,
        /// / The amount of tokens to swap.
        #[prost(double, optional, tag = "3")]
        pub in_token_amount: ::core::option::Option<f64>,
        /// / The allowable slippage in percent for the swap.
        #[prost(double, optional, tag = "4")]
        pub slippage: ::core::option::Option<f64>,
        /// / The RPC provider to use for the swap.
        #[prost(string, optional, tag = "5")]
        pub provider: ::core::option::Option<::prost::alloc::string::String>,
    }
    /// / Fetch the swap price from SushiSwap.
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct SushiswapExchangeRateTask {
        /// / The input token address.
        #[prost(string, optional, tag = "1")]
        pub in_token_address: ::core::option::Option<::prost::alloc::string::String>,
        /// / The output token address.
        #[prost(string, optional, tag = "2")]
        pub out_token_address: ::core::option::Option<::prost::alloc::string::String>,
        /// / The amount of tokens to swap.
        #[prost(double, optional, tag = "3")]
        pub in_token_amount: ::core::option::Option<f64>,
        /// / The allowable slippage in percent for the swap.
        #[prost(double, optional, tag = "4")]
        pub slippage: ::core::option::Option<f64>,
        /// / The RPC provider to use for the swap.
        #[prost(string, optional, tag = "5")]
        pub provider: ::core::option::Option<::prost::alloc::string::String>,
    }
    /// / Fetch the swap price from PancakeSwap.
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct PancakeswapExchangeRateTask {
        /// / The input token address.
        #[prost(string, optional, tag = "1")]
        pub in_token_address: ::core::option::Option<::prost::alloc::string::String>,
        /// / The output token address.
        #[prost(string, optional, tag = "2")]
        pub out_token_address: ::core::option::Option<::prost::alloc::string::String>,
        /// / The amount of tokens to swap.
        #[prost(double, optional, tag = "3")]
        pub in_token_amount: ::core::option::Option<f64>,
        /// / The allowable slippage in percent for the swap.
        #[prost(double, optional, tag = "4")]
        pub slippage: ::core::option::Option<f64>,
        /// / The RPC provider to use for the swap.
        #[prost(string, optional, tag = "5")]
        pub provider: ::core::option::Option<::prost::alloc::string::String>,
    }
    /// Execute a job and store the result in a variable to reference later.
    ///
    /// ***Input***: None
    ///
    /// ***Returns***: The input
    ///
    /// ***Example***: CacheTask storing ${ONE} = 1
    ///
    /// ```text,json
    /// { "cacheTask": { "cacheItems": \[ { "variableName": "ONE", "job": { "tasks": [ { "valueTask": { "value": 1 } } \] } } ] } }
    /// ```
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct CacheTask {
        /// / A list of cached variables to reference in the job with `${VARIABLE_NAME}`.
        #[prost(message, repeated, tag = "1")]
        pub cache_items: ::prost::alloc::vec::Vec<cache_task::CacheItem>,
    }
    /// Nested message and enum types in `CacheTask`.
    pub mod cache_task {
        #[allow(clippy::derive_partial_eq_without_eq)]
        #[derive(Clone, PartialEq, ::prost::Message)]
        pub struct CacheItem {
            /// / The name of the variable to store in cache to reference later with `${VARIABLE_NAME}`.
            #[prost(string, optional, tag = "1")]
            pub variable_name: ::core::option::Option<::prost::alloc::string::String>,
            /// / The OracleJob to execute to yield the value to store in cache.
            #[prost(message, optional, tag = "2")]
            pub job: ::core::option::Option<super::super::OracleJob>,
        }
    }
    /// / Return the difference between an oracle's clock and the current timestamp at `SYSVAR_CLOCK_PUBKEY`.
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct SysclockOffsetTask {}
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct MarinadeStateTask {}
    /// / Fetch the account data in a stringified buffer format.
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct SolanaAccountDataFetchTask {
        /// / The on-chain account to fetch the account data from.
        #[prost(string, optional, tag = "1")]
        pub pubkey: ::core::option::Option<::prost::alloc::string::String>,
    }
    /// Return a timestamp from a crontab instruction.
    ///
    /// ***Input***: None
    ///
    /// ***Returns***: A timestamp
    ///
    /// ***Example***: Return the unix timestamp for the on-chain SYSCLOCK
    ///
    /// ```text,json
    /// {"cronParseTask":{"cronPattern":"* * * * * *","clockOffset":0,"clock":"SYSCLOCK"}}
    /// ```
    ///
    /// ***Example***: Return the unix timestamp for next friday at 5pm UTC
    ///
    /// ```text,json
    /// {"cronParseTask":{"cronPattern":"0 17 * * 5","clockOffset":0,"clock":0}}
    /// ```
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct CronParseTask {
        /// / The cron pattern to parse.
        #[prost(string, optional, tag = "1")]
        pub cron_pattern: ::core::option::Option<::prost::alloc::string::String>,
        /// / The timestamp offset to calculate the next run.
        #[prost(int32, optional, tag = "2")]
        pub clock_offset: ::core::option::Option<i32>,
        /// / Use the TaskRunner's clock or the on-chain SYSCLOCK.
        #[prost(enumeration = "cron_parse_task::ClockType", optional, tag = "3")]
        pub clock: ::core::option::Option<i32>,
    }
    /// Nested message and enum types in `CronParseTask`.
    pub mod cron_parse_task {
        #[derive(
            Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration,
        )]
        #[repr(i32)]
        pub enum ClockType {
            /// / Use the TaskRunners system clock for the current time.
            Oracle = 0,
            /// / Use the on-chain SYSCLOCK for the current time.
            Sysclock = 1,
        }
        impl ClockType {
            /// String value of the enum field names used in the ProtoBuf definition.
            ///
            /// The values are not transformed in any way and thus are considered stable
            /// (if the ProtoBuf definition does not change) and safe for programmatic use.
            pub fn as_str_name(&self) -> &'static str {
                match self {
                    ClockType::Oracle => "ORACLE",
                    ClockType::Sysclock => "SYSCLOCK",
                }
            }
            /// Creates an enum from field names used in the ProtoBuf definition.
            pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
                match value {
                    "ORACLE" => Some(Self::Oracle),
                    "SYSCLOCK" => Some(Self::Sysclock),
                    _ => None,
                }
            }
        }
    }
    /// / Return the deserialized value from a stringified buffer.
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct BufferLayoutParseTask {
        /// / The buffer offset to start deserializing from.
        #[prost(uint32, optional, tag = "1")]
        pub offset: ::core::option::Option<u32>,
        /// / The endianness of the stored value.
        #[prost(enumeration = "buffer_layout_parse_task::Endian", optional, tag = "2")]
        pub endian: ::core::option::Option<i32>,
        /// / The type of value to deserialize.
        #[prost(
            enumeration = "buffer_layout_parse_task::BufferParseType",
            optional,
            tag = "3"
        )]
        pub r#type: ::core::option::Option<i32>,
    }
    /// Nested message and enum types in `BufferLayoutParseTask`.
    pub mod buffer_layout_parse_task {
        #[derive(
            Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration,
        )]
        #[repr(i32)]
        pub enum Endian {
            /// Use little endian byte order.
            LittleEndian = 0,
            /// Use big endian byte order.
            BigEndian = 1,
        }
        impl Endian {
            /// String value of the enum field names used in the ProtoBuf definition.
            ///
            /// The values are not transformed in any way and thus are considered stable
            /// (if the ProtoBuf definition does not change) and safe for programmatic use.
            pub fn as_str_name(&self) -> &'static str {
                match self {
                    Endian::LittleEndian => "LITTLE_ENDIAN",
                    Endian::BigEndian => "BIG_ENDIAN",
                }
            }
            /// Creates an enum from field names used in the ProtoBuf definition.
            pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
                match value {
                    "LITTLE_ENDIAN" => Some(Self::LittleEndian),
                    "BIG_ENDIAN" => Some(Self::BigEndian),
                    _ => None,
                }
            }
        }
        #[derive(
            Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration,
        )]
        #[repr(i32)]
        pub enum BufferParseType {
            /// / A public key.
            Pubkey = 1,
            /// / A boolean.
            Bool = 2,
            /// / An 8-bit unsigned value.
            U8 = 3,
            /// / An 8-bit signed value.
            I8 = 4,
            /// / A 16-bit unsigned value.
            U16 = 5,
            /// / A 16-bit signed value.
            I16 = 6,
            /// / A 32-bit unsigned value.
            U32 = 7,
            /// / A 32-bit signed value.
            I32 = 8,
            /// / A 32-bit IEEE floating point value.
            F32 = 9,
            /// / A 64-bit unsigned value.
            U64 = 10,
            /// / A 64-bit signed value.
            I64 = 11,
            /// / A 64-bit IEEE floating point value.
            F64 = 12,
            /// / A 128-bit unsigned value.
            U128 = 13,
            /// / A 128-bit signed value.
            I128 = 14,
        }
        impl BufferParseType {
            /// String value of the enum field names used in the ProtoBuf definition.
            ///
            /// The values are not transformed in any way and thus are considered stable
            /// (if the ProtoBuf definition does not change) and safe for programmatic use.
            pub fn as_str_name(&self) -> &'static str {
                match self {
                    BufferParseType::Pubkey => "pubkey",
                    BufferParseType::Bool => "bool",
                    BufferParseType::U8 => "u8",
                    BufferParseType::I8 => "i8",
                    BufferParseType::U16 => "u16",
                    BufferParseType::I16 => "i16",
                    BufferParseType::U32 => "u32",
                    BufferParseType::I32 => "i32",
                    BufferParseType::F32 => "f32",
                    BufferParseType::U64 => "u64",
                    BufferParseType::I64 => "i64",
                    BufferParseType::F64 => "f64",
                    BufferParseType::U128 => "u128",
                    BufferParseType::I128 => "i128",
                }
            }
            /// Creates an enum from field names used in the ProtoBuf definition.
            pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
                match value {
                    "pubkey" => Some(Self::Pubkey),
                    "bool" => Some(Self::Bool),
                    "u8" => Some(Self::U8),
                    "i8" => Some(Self::I8),
                    "u16" => Some(Self::U16),
                    "i16" => Some(Self::I16),
                    "u32" => Some(Self::U32),
                    "i32" => Some(Self::I32),
                    "f32" => Some(Self::F32),
                    "u64" => Some(Self::U64),
                    "i64" => Some(Self::I64),
                    "f64" => Some(Self::F64),
                    "u128" => Some(Self::U128),
                    "i128" => Some(Self::I128),
                    _ => None,
                }
            }
        }
    }
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct HistoryFunctionTask {
        #[prost(enumeration = "history_function_task::Method", optional, tag = "1")]
        pub method: ::core::option::Option<i32>,
        #[prost(string, optional, tag = "2")]
        pub aggregator_address: ::core::option::Option<::prost::alloc::string::String>,
        #[prost(uint32, optional, tag = "3")]
        pub period: ::core::option::Option<u32>,
    }
    /// Nested message and enum types in `HistoryFunctionTask`.
    pub mod history_function_task {
        #[derive(
            Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration,
        )]
        #[repr(i32)]
        pub enum Method {
            Min = 0,
            Max = 1,
        }
        impl Method {
            /// String value of the enum field names used in the ProtoBuf definition.
            ///
            /// The values are not transformed in any way and thus are considered stable
            /// (if the ProtoBuf definition does not change) and safe for programmatic use.
            pub fn as_str_name(&self) -> &'static str {
                match self {
                    Method::Min => "METHOD_MIN",
                    Method::Max => "METHOD_MAX",
                }
            }
            /// Creates an enum from field names used in the ProtoBuf definition.
            pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
                match value {
                    "METHOD_MIN" => Some(Self::Min),
                    "METHOD_MAX" => Some(Self::Max),
                    _ => None,
                }
            }
        }
    }
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct VwapTask {
        #[prost(string, optional, tag = "1")]
        pub price_aggregator_address: ::core::option::Option<::prost::alloc::string::String>,
        #[prost(string, optional, tag = "2")]
        pub volume_aggregator_address: ::core::option::Option<::prost::alloc::string::String>,
        #[prost(uint32, optional, tag = "3")]
        pub period: ::core::option::Option<u32>,
    }
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct EwmaTask {
        #[prost(string, optional, tag = "1")]
        pub aggregator_address: ::core::option::Option<::prost::alloc::string::String>,
        #[prost(int32, optional, tag = "2")]
        pub period: ::core::option::Option<i32>,
        #[prost(double, optional, tag = "3")]
        pub lambda: ::core::option::Option<f64>,
    }
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct ComparisonTask {
        /// / The type of operator to use on the left (lhs) and right (rhs) operand.
        #[prost(enumeration = "comparison_task::Operation", optional, tag = "1")]
        pub op: ::core::option::Option<i32>,
        /// / The OracleJob to execute if the condition evaluates to true.
        #[prost(message, optional, tag = "6")]
        pub on_true: ::core::option::Option<super::OracleJob>,
        /// / The result to use if the condition evaluates to true. Can be set to a `${CACHE_KEY}`.
        #[prost(string, optional, tag = "7")]
        pub on_true_value: ::core::option::Option<::prost::alloc::string::String>,
        /// / The OracleJob to execute if the condition evaluates to false.
        #[prost(message, optional, tag = "8")]
        pub on_false: ::core::option::Option<super::OracleJob>,
        /// / The result to use if the condition evaluates to false. Can be set to a `${CACHE_KEY}`.
        #[prost(string, optional, tag = "9")]
        pub on_false_value: ::core::option::Option<::prost::alloc::string::String>,
        /// / The OracleJob to execute if the condition fails to evaluate.
        #[prost(message, optional, tag = "10")]
        pub on_failure: ::core::option::Option<super::OracleJob>,
        /// / The result to use if the condition fails to evaluate. Can be set to a `${CACHE_KEY}`.
        #[prost(string, optional, tag = "11")]
        pub on_failure_value: ::core::option::Option<::prost::alloc::string::String>,
        #[prost(oneof = "comparison_task::Lhs", tags = "2, 3")]
        pub lhs: ::core::option::Option<comparison_task::Lhs>,
        #[prost(oneof = "comparison_task::Rhs", tags = "4, 5")]
        pub rhs: ::core::option::Option<comparison_task::Rhs>,
    }
    /// Nested message and enum types in `ComparisonTask`.
    pub mod comparison_task {
        #[derive(
            Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration,
        )]
        #[repr(i32)]
        pub enum Operation {
            /// / Use the equals to '==' operator.
            Eq = 0,
            /// / Use the greater than '>' operator.
            Gt = 1,
            /// / Use the less than '\<' operator.
            Lt = 2,
        }
        impl Operation {
            /// String value of the enum field names used in the ProtoBuf definition.
            ///
            /// The values are not transformed in any way and thus are considered stable
            /// (if the ProtoBuf definition does not change) and safe for programmatic use.
            pub fn as_str_name(&self) -> &'static str {
                match self {
                    Operation::Eq => "OPERATION_EQ",
                    Operation::Gt => "OPERATION_GT",
                    Operation::Lt => "OPERATION_LT",
                }
            }
            /// Creates an enum from field names used in the ProtoBuf definition.
            pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
                match value {
                    "OPERATION_EQ" => Some(Self::Eq),
                    "OPERATION_GT" => Some(Self::Gt),
                    "OPERATION_LT" => Some(Self::Lt),
                    _ => None,
                }
            }
        }
        #[allow(clippy::derive_partial_eq_without_eq)]
        #[derive(Clone, PartialEq, ::prost::Oneof)]
        pub enum Lhs {
            /// / OracleJob where the executed result is equal to the left hand side operand.
            #[prost(message, tag = "2")]
            Lhs(super::super::OracleJob),
            /// / String or `${CACHE_KEY}` representing the left hand side operand.
            #[prost(string, tag = "3")]
            LhsValue(::prost::alloc::string::String),
        }
        #[allow(clippy::derive_partial_eq_without_eq)]
        #[derive(Clone, PartialEq, ::prost::Oneof)]
        pub enum Rhs {
            /// / OracleJob where the executed result is equal to the right hand side operand.
            #[prost(message, tag = "4")]
            Rhs(super::super::OracleJob),
            /// / String or `${CACHE_KEY}` representing the right hand side operand.
            #[prost(string, tag = "5")]
            RhsValue(::prost::alloc::string::String),
        }
    }
    /// Round the current running result to a set number of decimal places.
    ///
    /// ***Input***: The current running numerical result.
    ///
    /// ***Returns***: The running result rounded to a set number of decimal places.
    ///
    /// ***Example***: Round down the running resul to 8 decimal places
    ///
    /// ```text,json
    /// { "roundTask": { "method": "METHOD_ROUND_DOWN", "decimals": 8 } }
    /// ```
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct RoundTask {
        /// / The rounding method to use.
        #[prost(enumeration = "round_task::Method", optional, tag = "1")]
        pub method: ::core::option::Option<i32>,
        /// / The number of decimals to round to.
        #[prost(int32, optional, tag = "2")]
        pub decimals: ::core::option::Option<i32>,
    }
    /// Nested message and enum types in `RoundTask`.
    pub mod round_task {
        #[derive(
            Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration,
        )]
        #[repr(i32)]
        pub enum Method {
            /// / Round the result down.
            RoundUp = 0,
            /// / Round the result up.
            RoundDown = 1,
        }
        impl Method {
            /// String value of the enum field names used in the ProtoBuf definition.
            ///
            /// The values are not transformed in any way and thus are considered stable
            /// (if the ProtoBuf definition does not change) and safe for programmatic use.
            pub fn as_str_name(&self) -> &'static str {
                match self {
                    Method::RoundUp => "METHOD_ROUND_UP",
                    Method::RoundDown => "METHOD_ROUND_DOWN",
                }
            }
            /// Creates an enum from field names used in the ProtoBuf definition.
            pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
                match value {
                    "METHOD_ROUND_UP" => Some(Self::RoundUp),
                    "METHOD_ROUND_DOWN" => Some(Self::RoundDown),
                    _ => None,
                }
            }
        }
    }
    /// Bound the running result to an upper/lower bound. This is typically the last task in an OracleJob.
    ///
    /// ***Input***: The current running numerical result.
    ///
    /// ***Returns***: The running result bounded to an upper or lower bound if it exceeds a given threshold.
    ///
    /// ***Example***: Bound the running result to a value between 0.90 and 1.10
    ///
    /// ```text,json
    /// { "boundTask": { "lowerBoundValue": "0.90","onExceedsLowerBoundValue": "0.90","upperBoundValue": "1.10","onExceedsUpperBoundValue": "1.10" } }
    /// ```
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct BoundTask {
        /// / The OracleJob to execute for the lower bound value.
        #[prost(message, optional, tag = "1")]
        pub lower_bound: ::core::option::Option<super::OracleJob>,
        /// / The value to use for the lower bound. Can be set to a `${CACHE_KEY}`.
        #[prost(string, optional, tag = "2")]
        pub lower_bound_value: ::core::option::Option<::prost::alloc::string::String>,
        /// / The OracleJob to execute for the upper bound value.
        #[prost(message, optional, tag = "3")]
        pub upper_bound: ::core::option::Option<super::OracleJob>,
        /// / The value to use for the upper bound. Can be set to a `${CACHE_KEY}`.
        #[prost(string, optional, tag = "4")]
        pub upper_bound_value: ::core::option::Option<::prost::alloc::string::String>,
        /// / The OracleJob to execute if the upper bound is exceeded.
        #[prost(message, optional, tag = "5")]
        pub on_exceeds_upper_bound: ::core::option::Option<super::OracleJob>,
        /// / The value to use if the upper bound is exceeded. Can be set to a `${CACHE_KEY}`.
        #[prost(string, optional, tag = "6")]
        pub on_exceeds_upper_bound_value: ::core::option::Option<::prost::alloc::string::String>,
        /// / The OracleJob to execute if the lower bound is exceeded.
        #[prost(message, optional, tag = "7")]
        pub on_exceeds_lower_bound: ::core::option::Option<super::OracleJob>,
        /// / The value to use if the lower bound is exceeded. Can be set to a `${CACHE_KEY}`.
        #[prost(string, optional, tag = "8")]
        pub on_exceeds_lower_bound_value: ::core::option::Option<::prost::alloc::string::String>,
    }
    /// Represents a singular operation performed by an oracle to yield an eventual numerical result.
    #[allow(clippy::derive_partial_eq_without_eq)]
    #[derive(Clone, PartialEq, ::prost::Message)]
    pub struct Task {
        #[prost(
            oneof = "task::Task",
            tags = "1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46"
        )]
        pub task: ::core::option::Option<task::Task>,
    }
    /// Nested message and enum types in `Task`.
    pub mod task {
        #[allow(clippy::derive_partial_eq_without_eq)]
        #[derive(Clone, PartialEq, ::prost::Oneof)]
        pub enum Task {
            /// The adapter will report the text body of a successful HTTP request to the
            /// specified url, or return an error if the response status code is greater
            /// than or equal to 400.
            ///
            /// ***Input***: None
            ///
            /// ***Returns***: String representation of the http response.
            ///
            /// ***Example***: Basic HttpTask
            ///
            /// ```text,json
            /// {"httpTask": {"url": "<https://mywebsite.org/path"}> }
            /// ```
            ///
            /// ***Example***: HttpTask example with headers
            ///
            /// ```text,json
            /// { "httpTask": { "url": "<https://mywebsite.org/path",> "method": "METHOD_POST", "headers": \[ { "key": "MY_HEADER_KEY", "value": "MY_HEADER_VALUE" } \], "body": "{\"MY_BODY_KEY\":\"MY_BODY_VALUE\"}" } }
            /// ```
            #[prost(message, tag = "1")]
            HttpTask(super::HttpTask),
            /// The adapter walks the path specified and returns the value found at that result. If returning
            /// JSON data from the HttpGet or HttpPost adapters, you must use this adapter to parse the response.
            ///
            /// ***Input***: String representation of a JSON object.
            ///
            /// ***Returns***: A numerical result.
            ///
            /// ***Example***: Parses the price field from a JSON object
            ///
            /// ```text,json
            /// {"jsonParse": {"path": "$.price"} }
            /// ```
            #[prost(message, tag = "2")]
            JsonParseTask(super::JsonParseTask),
            /// Returns the median (middle) of all the results returned by the provided subtasks and subjobs. Nested tasks or jobs must return a Number.
            ///
            /// ***Input***: None
            ///
            /// ***Returns***: A numerical result.
            ///
            /// ***Example***: Returns the median numerical result of 3 tasks.
            ///
            /// ```text,json
            /// {"medianTask": {"tasks": \[{"valueTask": {"value": 10}},{"valueTask": {"value": 20}},{"valueTask": {"value": 30}}\]}}
            /// ```
            ///
            /// ***Example***: Returns the median numerical result of 3 jobs.
            ///
            /// ```text,json
            /// {"medianTask": {"jobs": \[{"tasks": [{"httpTask": {"url": "<https://www.binance.com/api/v3/ticker/price?symbol=SOLUSDT"}},{"jsonParseTask":> {"path": "$.price"}}\]},{"tasks": \[{"httpTask": {"url": "<https://www.binance.us/api/v3/ticker/price?symbol=SOLUSD"}},{"jsonParseTask":> {"path": "$.price"}}\]},{"tasks": [{"httpTask": {"url": "<https://api-pub.bitfinex.com/v2/tickers?symbols=tSOLUSD"}},{"jsonParseTask":> {"path": "$[0][7]"}}]}]}}
            /// ```
            #[prost(message, tag = "4")]
            MedianTask(super::MedianTask),
            /// Returns the mean (average) of all the results returned by the provided subtasks and subjobs. Nested tasks or jobs must return a Number.
            ///
            /// ***Input***: None
            ///
            /// ***Returns***: A numerical result.
            ///
            /// ***Example***: Returns the mean numerical result of 3 tasks.
            ///
            /// ```text,json
            /// {"meanTask": {"tasks": \[{"valueTask": {"value": 10}},{"valueTask": {"value": 20}},{"valueTask": {"value": 30}}\]}}
            /// ```
            ///
            /// ***Example***: Returns the mean numerical result of 3 jobs.
            ///
            /// ```text,json
            /// {"meanTask": {"jobs": \[{"tasks": [{"httpTask": {"url": "<https://www.binance.com/api/v3/ticker/price?symbol=SOLUSDT"}},{"jsonParseTask":> {"path": "$.price"}}\]},{"tasks": \[{"httpTask": {"url": "<https://www.binance.us/api/v3/ticker/price?symbol=SOLUSD"}},{"jsonParseTask":> {"path": "$.price"}}\]},{"tasks": [{"httpTask": {"url": "<https://api-pub.bitfinex.com/v2/tickers?symbols=tSOLUSD"}},{"jsonParseTask":> {"path": "$[0][7]"}}]}]}}
            /// ```
            #[prost(message, tag = "5")]
            MeanTask(super::MeanTask),
            /// Opens and maintains a websocket for light speed data retrieval.
            ///
            /// ***Input***: None
            ///
            /// ***Returns***: String representation of the websocket subscription message.
            ///
            /// ***Example***: Opens a coinbase websocket
            ///
            /// ```text,json
            /// { "websocketTask": { "url": "wss://ws-feed.pro.coinbase.com", "subscription": "{\"type\":\"subscribe\",\"product_ids\":\[\"BTC-USD\"\],\"channels\":\[\"ticker\",{\"name\":\"ticker\",\"product_ids\":[\"BTC-USD\"\]}]}", "maxDataAgeSeconds": 15, "filter": "$\[?(@.type == 'ticker' && @.product_id == 'BTC-USD')\]" } }
            /// ```
            #[prost(message, tag = "6")]
            WebsocketTask(super::WebsocketTask),
            /// This task will divide a numerical input by a scalar value from a job of subtasks, an aggregator, or a big.
            ///
            /// ***Input***: The current running numerical result output from a scalar value, an aggregator, a job of subtasks or a big.
            ///
            /// ***Returns***: A numerical result.
            ///
            /// ***Example***: Returns the numerical result by dividing by a job of subtasks.
            ///
            /// ```text,json
            /// {"tasks":\[{"valueTask":{"value":100}},{"divideTask":{"job":{"tasks":[{"valueTask":{"value":10}}\]}}}]}
            /// ```
            ///
            /// ***Example***: Returns the numerical result by dividing by an aggregator.
            ///
            /// ```text,json
            /// {"tasks":\[{"valueTask":{"value":100}},{"divideTask":{"aggregatorPubkey":"GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR"}}\]}
            /// ```
            ///
            /// ***Example***: Returns the numerical result by dividing by a big.
            ///
            /// ```text,json
            /// {"tasks":\[{"cacheTask":{"cacheItems":[{"variableName":"TEN","job":{"tasks":[{"valueTask":{"value":10}}\]}}]}},{"valueTask":{"value":100}},{"divideTask":{"big":"${TEN}"}}]}
            /// ```
            #[prost(message, tag = "7")]
            DivideTask(super::DivideTask),
            /// This task will multiply a numerical input by a scalar value from a job of subtasks, an aggregator, or a big.
            ///
            /// ***Input***: The current running numerical result output from a scalar value, an aggregator, a job of subtasks or a big.
            ///
            /// ***Returns***: A numerical result.
            ///
            /// ***Example***: Returns the numerical result by multiplying by a job of subtasks.
            ///
            /// ```text,json
            /// {"tasks":\[{"valueTask":{"value":100}},{"multiplyTask":{"job":{"tasks":[{"valueTask":{"value":10}}\]}}}]}
            /// ```
            ///
            /// ***Example***: Returns the numerical result by multiplying by an aggregator.
            ///
            /// ```text,json
            /// {"tasks":\[{"valueTask":{"value":100}},{"multiplyTask":{"aggregatorPubkey":"GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR"}}\]}
            /// ```
            ///
            /// ***Example***: Returns the numerical result by multiplying by a big.
            ///
            /// ```text,json
            /// {"tasks":\[{"cacheTask":{"cacheItems":[{"variableName":"TEN","job":{"tasks":[{"valueTask":{"value":10}}\]}}]}},{"valueTask":{"value":100}},{"multiplyTask":{"big":"${TEN}"}}]}
            /// ```
            #[prost(message, tag = "8")]
            MultiplyTask(super::MultiplyTask),
            /// Fetch LP token price info from a number of supported exchanges.
            ///
            /// See our blog post on [Fair LP Token Oracles](/blog/2022/01/20/Fair-LP-Token-Oracles)
            ///
            /// *NOTE*\*: This is not the swap price but the price of the underlying LP token.
            ///
            /// ***Input***: None
            ///
            /// ***Returns***: The price of an LP token for a given AMM pool.
            ///
            /// ***Example***: Fetch the Orca LP token price of the SOL/USDC pool
            ///
            /// ```text,json
            /// { "lpTokenPriceTask": { "orcaPoolAddress": "APDFRM3HMr8CAGXwKHiu2f5ePSpaiEJhaURwhsRrUUt9" } }
            /// ```
            ///
            /// ***Example***: Fetch the fair price Orca LP token price of the SOL/USDC pool
            ///
            /// ```text,json
            /// { "lpTokenPriceTask": { "orcaPoolAddress": "APDFRM3HMr8CAGXwKHiu2f5ePSpaiEJhaURwhsRrUUt9", "useFairPrice": true, "priceFeedAddresses": \[ "GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR", "BjUgj6YCnFBZ49wF54ddBVA9qu8TeqkFtkbqmZcee8uW" \] } }
            /// ```
            ///
            /// ***Example***: Fetch the fair price Raydium LP token price of the SOL/USDC pool
            ///
            /// ```text,json
            /// { "lpTokenPriceTask": { "raydiumPoolAddress": "58oQChx4yWmvKdwLLZzBi4ChoCc2fqCUWBkwMihLYQo2", "useFairPrice": true,"priceFeedAddresses": \["GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR","BjUgj6YCnFBZ49wF54ddBVA9qu8TeqkFtkbqmZcee8uW" \] } }
            /// ```
            #[prost(message, tag = "9")]
            LpTokenPriceTask(super::LpTokenPriceTask),
            /// Fetch the current swap price for a given liquidity pool
            ///
            /// ***Input***: None
            ///
            /// ***Returns***: The swap price for a given AMM pool.
            ///
            /// ***Example***: Fetch the exchange rate from the Orca SOL/USDC pool
            ///
            /// ```text,json
            /// { "lpExchangeRateTask": { "orcaPoolAddress": "APDFRM3HMr8CAGXwKHiu2f5ePSpaiEJhaURwhsRrUUt9" } }
            /// ```
            ///
            /// ***Example***: Fetch the exchange rate from the Raydium SOL/USDC pool
            ///
            /// ```text,json
            /// { "lpExchangeRateTask": { "raydiumPoolAddress": "58oQChx4yWmvKdwLLZzBi4ChoCc2fqCUWBkwMihLYQo2" } }
            /// ```
            #[prost(message, tag = "10")]
            LpExchangeRateTask(super::LpExchangeRateTask),
            /// This task will run the `attempt` on the subtasks in an effort to produce a valid numerical result. If `attempt`. fails to produce an acceptable result, `on_failure` subtasks will be run instead.
            ///
            /// ***Input***: The current running numerical result output from a task.
            ///
            /// ***Returns***: A numerical result, else run `on_failure` subtasks.
            ///
            /// ***Example***: Returns the numerical result from the conditionalTask's subtasks, else `on_failure` returns the numerical result from its subtasks.
            ///
            /// ```text,json
            /// {"conditionalTask":{"attempt":\[{"tasks":[{"jupiterSwapTask":{"inTokenAddress":"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v","outTokenAddress":"DUALa4FC2yREwZ59PHeu1un4wis36vHRv5hWVBmzykCJ"}}\]}],"onFailure":\[{"lpExchangeRateTask":{"orcaPoolAddress":"7yJ4gMRJhEoCR48aPE3EAWRmCoygakik81ZS1sajaTnE"}}\]}}
            /// ```
            #[prost(message, tag = "11")]
            ConditionalTask(super::ConditionalTask),
            /// Returns a specified value.
            ///
            /// ***Input***: None
            ///
            /// ***Returns***: A numerical result.
            ///
            /// ***Example***: Returns the value 10
            ///
            /// ```text,json
            /// {"valueTask": {"value": 10} }
            /// ```
            ///
            /// ***Example***: Returns the currentRound result of an aggregator
            ///
            /// ```text,json
            /// {"valueTask": {"aggregatorPubkey": "GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR"} }
            /// ```
            ///
            /// ***Example***: Returns the value stored in a CacheTask variable
            ///
            /// ```text,json
            /// {"valueTask": {"big": "${ONE}"} }
            /// ```
            #[prost(message, tag = "12")]
            ValueTask(super::ValueTask),
            /// Returns the maximum value of all the results returned by the provided subtasks and subjobs. Nested tasks or jobs must return a Number.
            ///
            /// ***Input***: None
            ///
            /// ***Returns***: A numerical result.
            ///
            /// ***Example***: Returns the maximum numerical result from 3 tasks.
            ///
            /// ```text,json
            /// {"maxTask": {"tasks": \[{"valueTask": {"value": 10}},{"valueTask": {"value": 20}},{"valueTask": {"value": 30}}\]}}
            /// ```
            ///
            /// ***Example***: Returns the minimum numerical result from 3 jobs.
            ///
            /// ```text,json
            /// {"maxTask": {"jobs": \[{"tasks": [{"httpTask": {"url": "<https://www.binance.com/api/v3/ticker/price?symbol=SOLUSDT"}},{"jsonParseTask":> {"path": "$.price"}}\]},{"tasks": \[{"httpTask": {"url": "<https://www.binance.us/api/v3/ticker/price?symbol=SOLUSD"}},{"jsonParseTask":> {"path": "$.price"}}\]},{"tasks": [{"httpTask": {"url": "<https://api-pub.bitfinex.com/v2/tickers?symbols=tSOLUSD"}},{"jsonParseTask":> {"path": "$[0][7]"}}]}]}}
            /// ```
            #[prost(message, tag = "13")]
            MaxTask(super::MaxTask),
            #[prost(message, tag = "14")]
            RegexExtractTask(super::RegexExtractTask),
            #[prost(message, tag = "15")]
            XstepPriceTask(super::XStepPriceTask),
            /// This task will add a numerical input by a scalar value from a job of subtasks, an aggregator, or a big.
            ///
            /// ***Input***: The current running numerical result output from a scalar value, an aggregator, a job of subtasks or a big.
            ///
            /// ***Returns***: A numerical result.
            ///
            /// ***Example***: Returns the numerical result by adding by a job of subtasks.
            ///
            /// ```text,json
            /// {"tasks":\[{"valueTask":{"value":100}},{"addTask":{"job":{"tasks":[{"valueTask":{"value":10}}\]}}}]}
            /// ```
            ///
            /// ***Example***: Returns the numerical result by multiplying by an aggregator.
            ///
            /// ```text,json
            /// {"tasks":\[{"valueTask":{"value":100}},{"addTask":{"aggregatorPubkey":"GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR"}}\]}
            /// ```
            ///
            /// ***Example***: Returns the numerical result by multiplying by a big.
            ///
            /// ```text,json
            /// {"tasks":\[{"cacheTask":{"cacheItems":[{"variableName":"TEN","job":{"tasks":[{"valueTask":{"value":10}}\]}}]}},{"valueTask":{"value":100}},{"addTask":{"big":"${TEN}"}}]}
            /// ```
            #[prost(message, tag = "16")]
            AddTask(super::AddTask),
            /// This task will subtract a numerical input by a scalar value from a job of subtasks, an aggregator, or a big.
            ///
            /// ***Input***: The current running numerical result output from a scalar value, an aggregator, a job of subtasks or a big.
            ///
            /// ***Returns***: A numerical result.
            ///
            /// ***Example***: Returns the numerical result by subtracting by a job of subtasks.
            ///
            /// ```text,json
            /// {"tasks":\[{"valueTask":{"value":100}},{"subtractTask":{"job":{"tasks":[{"valueTask":{"value":10}}\]}}}]}
            /// ```
            ///
            /// ***Example***: Returns the numerical result by multiplying by an aggregator.
            ///
            /// ```text,json
            /// {"tasks":\[{"valueTask":{"value":100}},{"subtractTask":{"aggregatorPubkey":"GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR"}}\]}
            /// ```
            ///
            /// ***Example***: Returns the numerical result by multiplying by a big.
            ///
            /// ```text,json
            /// {"tasks":\[{"cacheTask":{"cacheItems":[{"variableName":"TEN","job":{"tasks":[{"valueTask":{"value":10}}\]}}]}},{"valueTask":{"value":100}},{"subtractTask":{"big":"${TEN}"}}]}
            /// ```
            #[prost(message, tag = "17")]
            SubtractTask(super::SubtractTask),
            /// Takes a twap over a set period for a certain aggregator. Aggregators have an optional history buffer account storing the last N accepted results. The TwapTask will iterate over an aggregators history buffer and calculate the time weighted average of the samples within a given time period.
            ///
            /// ***Input***: None
            ///
            /// ***Returns***: The time weighted average of an aggregator over a given time period.
            ///
            /// ***Example***: The 1hr Twap of the SOL/USD Aggregator, requiring at least 60 samples.
            ///
            /// ```text,json
            /// { "twapTask": { "aggregatorPubkey": "GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR", "period": 3600, "minSamples": 60, "weightByPropagationTime": true  } }
            /// ```
            #[prost(message, tag = "18")]
            TwapTask(super::TwapTask),
            #[prost(message, tag = "19")]
            SerumSwapTask(super::SerumSwapTask),
            /// Round the current running result to an exponential power.
            ///
            /// ***Input***: The current running numerical result.
            ///
            /// ***Returns***: The input raised to an exponential power.
            ///
            /// ***Example***: Raise 2 to the power of 3, 2^3
            ///
            /// ```text,json
            /// {"tasks":\[{"valueTask":{"value":2}},{"powTask":{"scalar":3}}\]}
            /// ```
            #[prost(message, tag = "20")]
            PowTask(super::PowTask),
            #[prost(message, tag = "21")]
            LendingRateTask(super::LendingRateTask),
            #[prost(message, tag = "22")]
            MangoPerpMarketTask(super::MangoPerpMarketTask),
            /// Fetch the simulated price for a swap on JupiterSwap.
            ///
            /// ***Input***: None
            ///
            /// ***Returns***: The swap price on Jupiter for a given input and output token mint address.
            ///
            /// ***Example***: Fetch the JupiterSwap price for exchanging 1 SOL into USDC.
            ///
            /// ```text,json
            /// { "jupiterSwapTask": { "inTokenAddress": "So11111111111111111111111111111111111111112", "outTokenAddress": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v" } }
            /// ```
            ///
            /// ***Example***: Fetch the JupiterSwap price for exchanging 1000 SOL into USDC.
            ///
            /// ```text,json
            /// { "jupiterSwapTask": { "inTokenAddress": "So11111111111111111111111111111111111111112", "outTokenAddress": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", "baseAmount": "1000" } }
            /// ```
            #[prost(message, tag = "23")]
            JupiterSwapTask(super::JupiterSwapTask),
            #[prost(message, tag = "24")]
            PerpMarketTask(super::PerpMarketTask),
            /// Fetch the current price of a Solana oracle protocol.
            ///
            /// ***Input***: None
            ///
            /// ***Returns***: The current price of an on-chain oracle.
            ///
            /// ***Example***: The Switchboard SOL/USD oracle price.
            ///
            /// ```text,json
            /// { "oracleTask": { "switchboardAddress": "GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR" } }
            /// ```
            ///
            /// ***Example***: The Pyth SOL/USD oracle price.
            ///
            /// ```text,json
            /// { "oracleTask": { "pythAddress": "H6ARHf6YXhGYeQfUzQNGk6rDNnLBQKrenN712K4AQJEG" } }
            /// ```
            ///
            /// ***Example***: The Chainlink SOL/USD oracle price.
            ///
            /// ```text,json
            /// { "oracleTask": { "chainlinkAddress": "CcPVS9bqyXbD9cLnTbhhHazLsrua8QMFUHTutPtjyDzq" } }
            /// ```
            #[prost(message, tag = "25")]
            OracleTask(super::OracleTask),
            #[prost(message, tag = "26")]
            AnchorFetchTask(super::AnchorFetchTask),
            #[prost(message, tag = "27")]
            DefiKingdomsTask(super::DefiKingdomsTask),
            #[prost(message, tag = "28")]
            TpsTask(super::TpsTask),
            #[prost(message, tag = "29")]
            SplStakePoolTask(super::SplStakePoolTask),
            #[prost(message, tag = "30")]
            SplTokenParseTask(super::SplTokenParseTask),
            #[prost(message, tag = "31")]
            UniswapExchangeRateTask(super::UniswapExchangeRateTask),
            #[prost(message, tag = "32")]
            SushiswapExchangeRateTask(super::SushiswapExchangeRateTask),
            #[prost(message, tag = "33")]
            PancakeswapExchangeRateTask(super::PancakeswapExchangeRateTask),
            /// Execute a job and store the result in a variable to reference later.
            ///
            /// ***Input***: None
            ///
            /// ***Returns***: The input
            ///
            /// ***Example***: CacheTask storing ${ONE} = 1
            ///
            /// ```text,json
            /// { "cacheTask": { "cacheItems": \[ { "variableName": "ONE", "job": { "tasks": [ { "valueTask": { "value": 1 } } \] } } ] } }
            /// ```
            #[prost(message, tag = "34")]
            CacheTask(super::CacheTask),
            #[prost(message, tag = "35")]
            SysclockOffsetTask(super::SysclockOffsetTask),
            #[prost(message, tag = "36")]
            MarinadeStateTask(super::MarinadeStateTask),
            #[prost(message, tag = "37")]
            SolanaAccountDataFetchTask(super::SolanaAccountDataFetchTask),
            #[prost(message, tag = "38")]
            BufferLayoutParseTask(super::BufferLayoutParseTask),
            /// Return a timestamp from a crontab instruction.
            ///
            /// ***Input***: None
            ///
            /// ***Returns***: A timestamp
            ///
            /// ***Example***: Return the unix timestamp for the on-chain SYSCLOCK
            ///
            /// ```text,json
            /// {"cronParseTask":{"cronPattern":"* * * * * *","clockOffset":0,"clock":"SYSCLOCK"}}
            /// ```
            ///
            /// ***Example***: Return the unix timestamp for next friday at 5pm UTC
            ///
            /// ```text,json
            /// {"cronParseTask":{"cronPattern":"0 17 * * 5","clockOffset":0,"clock":0}}
            /// ```
            #[prost(message, tag = "39")]
            CronParseTask(super::CronParseTask),
            /// Returns the minimum value of all the results returned by the provided subtasks and subjobs. Nested tasks or jobs must return a Number.
            ///
            /// ***Input***: None
            ///
            /// ***Returns***: A numerical result.
            ///
            /// ***Example***: Returns the minimum numerical result from 3 tasks.
            ///
            /// ```text,json
            /// {"minTask": {"tasks": \[{"valueTask": {"value": 10}},{"valueTask": {"value": 20}},{"valueTask": {"value": 30}}\]}}
            /// ```
            ///
            /// ***Example***: Returns the minimum numerical result from 3 jobs.
            ///
            /// ```text,json
            /// {"minTask": {"jobs": \[{"tasks": [{"httpTask": {"url": "<https://www.binance.com/api/v3/ticker/price?symbol=SOLUSDT"}},{"jsonParseTask":> {"path": "$.price"}}\]},{"tasks": \[{"httpTask": {"url": "<https://www.binance.us/api/v3/ticker/price?symbol=SOLUSD"}},{"jsonParseTask":> {"path": "$.price"}}\]},{"tasks": [{"httpTask": {"url": "<https://api-pub.bitfinex.com/v2/tickers?symbols=tSOLUSD"}},{"jsonParseTask":> {"path": "$[0][7]"}}]}]}}
            /// ```
            #[prost(message, tag = "40")]
            MinTask(super::MinTask),
            #[prost(message, tag = "41")]
            HistoryFunctionTask(super::HistoryFunctionTask),
            #[prost(message, tag = "42")]
            VwapTask(super::VwapTask),
            #[prost(message, tag = "43")]
            EwmaTask(super::EwmaTask),
            #[prost(message, tag = "44")]
            ComparisonTask(super::ComparisonTask),
            /// Round the current running result to a set number of decimal places.
            ///
            /// ***Input***: The current running numerical result.
            ///
            /// ***Returns***: The running result rounded to a set number of decimal places.
            ///
            /// ***Example***: Round down the running resul to 8 decimal places
            ///
            /// ```text,json
            /// { "roundTask": { "method": "METHOD_ROUND_DOWN", "decimals": 8 } }
            /// ```
            #[prost(message, tag = "45")]
            RoundTask(super::RoundTask),
            /// Bound the running result to an upper/lower bound. This is typically the last task in an OracleJob.
            ///
            /// ***Input***: The current running numerical result.
            ///
            /// ***Returns***: The running result bounded to an upper or lower bound if it exceeds a given threshold.
            ///
            /// ***Example***: Bound the running result to a value between 0.90 and 1.10
            ///
            /// ```text,json
            /// { "boundTask": { "lowerBoundValue": "0.90","onExceedsLowerBoundValue": "0.90","upperBoundValue": "1.10","onExceedsUpperBoundValue": "1.10" } }
            /// ```
            #[prost(message, tag = "46")]
            BoundTask(super::BoundTask),
        }
    }
}
