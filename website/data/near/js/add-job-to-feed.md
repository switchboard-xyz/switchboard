The code below shows how to add a job to an existing feed:

```ts
await aggregator.addJob({
  job: job.address,
  weight: 1,
});
```
