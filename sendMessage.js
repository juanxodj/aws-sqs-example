const SQSHelper = require("./SQSHelper");
require("dotenv").config();

(async () => {
  const sqs = new SQSHelper();
  const params = {
    QueueUrl: process.env.AWS_QUEUE_URL,
    MessageBody: JSON.stringify({
      message: "Hello AWS SQS!",
    }),
  };
  console.log(await sqs.sendMessage(params));
})();
