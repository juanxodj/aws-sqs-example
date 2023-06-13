const SQSHelper = require("./SQSHelper");
require("dotenv").config();

(async () => {
  const sqs = new SQSHelper();
  const params = {
    QueueUrl: process.env.AWS_QUEUE_URL,
    MaxNumberOfMessages: 1,
  };
  console.log(await sqs.receiveMessage(params));
})();
