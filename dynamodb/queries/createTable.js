require("dotenv").config();

const { REGION, ACCESS_KEY, SECRET_ACCESS_KEY } = process.env;

import { CreateTableCommand, DynamoDBClient } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({
  region: REGION,
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_ACCESS_KEY,
});

const createTable = async () => {
  const command = new CreateTableCommand({
    TableName: "Book",
    AttributeDefinitions: [
      {
        AttributeName: "Title",
        AttributeType: "S",
      },
      {
        AttributeName: "Genre",
        AttributeType: "S",
      },
    ],
    KeySchema: [
      {
        AttributeName: "Title",
        KeyType: "HASH",
      },
      {
        AttributeName: "Genre",
        KeyType: "RANGE",
      },
    ],
    BillingMode: "PAY_PER_REQUEST",
  });

  const response = await client.send(command);
  console.log(response);
  return response;
};

export { createTable };
