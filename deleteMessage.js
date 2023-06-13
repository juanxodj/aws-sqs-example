const SQSHelper = require("./SQSHelper");
require("dotenv").config();

(async () => {
  const sqs = new SQSHelper();
  const params = {
    QueueUrl: process.env.AWS_QUEUE_URL,
    ReceiptHandle: "[YOUR_RECEIPT_HANDLE]",
  };
  console.log(await sqs.deleteMessage(params));
})();
