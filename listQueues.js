const SQSHelper = require("./SQSHelper");

(async () => {
  const sqs = new SQSHelper();
  console.log(await sqs.listQueues());
})();
