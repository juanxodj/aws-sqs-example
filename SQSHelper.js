const {
  SQSClient,
  ListQueuesCommand,
  GetQueueAttributesCommand,
  SendMessageCommand,
  ReceiveMessageCommand,
  DeleteMessageCommand,
} = require("@aws-sdk/client-sqs");
require("dotenv").config();

class SQSHelper {
  constructor() {
    this.sqsClient = new SQSClient({
      region: process.env.AWS_DEFAULT_REGION,
    });
  }

  listQueues() {
    return this.sqsClient.send(new ListQueuesCommand({}));
  }

  getQueueAttributes(params) {
    return this.sqsClient.send(new GetQueueAttributesCommand(params));
  }

  sendMessage(params) {
    return this.sqsClient.send(new SendMessageCommand(params));
  }

  receiveMessage(params) {
    return this.sqsClient.send(new ReceiveMessageCommand(params));
  }

  deleteMessage(params) {
    return this.sqsClient.send(new DeleteMessageCommand(params));
  }
}

module.exports = SQSHelper;
