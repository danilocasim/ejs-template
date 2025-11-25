import "dotenv/config";

const { REGION, ACCESS_KEY, SECRET_ACCESS_KEY } = process.env;

import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";
import {
  PutCommand,
  DynamoDBDocumentClient,
  GetCommand,
  UpdateCommand,
} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({
  region: REGION,
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_ACCESS_KEY,
});
const docClient = DynamoDBDocumentClient.from(client);

export const addBook = async (title, genre) => {
  const command = new PutCommand({
    TableName: "Book",
    Item: {
      Title: title,
      Genre: genre,
    },
  });

  const response = await docClient.send(command);
  console.log(response);
  return response;
};

export const getBook = async (title, genre) => {
  const command = new GetCommand({
    TableName: "Book",
    Key: {
      Title: title,
      Genre: genre,
    },
  });

  const response = await docClient.send(command);
  console.log(response);
  return response;
};

export const getAllBooks = async () => {
  const command = new ScanCommand({
    TableName: "Book",
  });

  const response = await docClient.send(command);
  return response;
};
