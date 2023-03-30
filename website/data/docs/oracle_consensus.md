Switchboard uses rounds to open and close a batch of oracle responses. A
Switchboard feed has a specified minUpdateDelay which determines the minimum
time a round is open for in order to give the oracles enough time to respond.
When a new round is opened, the data feed gets assigned to a new batch of
oracles, which is configurable with the parameter oracleRequestBatchSize. After
minOracleResults responses are received, the on-chain program calculates the
result using the median of the oracle responses. The median ensures large
outliers do not drastically skew the accepted result, unlike averages. Oracles
who responded within the queue’s configured parameters are rewarded, while the
oracles who respond outside this threshold are slashed (if the queue has
slashingEnabled). As you can see, the oracle consensus can be configured by the
downstream user to provide the security necessary for their use case. Check out
the data feed docs for more information on the lifecycle of Switchboard data
feed updates.

This differs from other oracle solutions like Pyth where data feeds are sourced
from trusted market participants directly. This results in a faster update rate
but makes no guarantees on the number of sources that responded. With
Switchboard feeds you can guarantee a set number of sources and oracles have
responded before accepting the result on-chain.
