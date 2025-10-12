import {
  type ClientRequest,
  type Server,
  type ServerResponse,
  createServer
} from "node:http";

import { type ListenOptions } from "node:net";

const options = {
  host: process.env.HTTP_HOST ?? "localhost",
  port: Number(process.env.HTTP_PORT) ?? 3000,
  exclusive: true
} satisfies Readonly<ListenOptions>;

const headers = {
  "Content-Type": "application/json",
  "X-Powered-By": "typescript-http-server"
} satisfies Readonly<Partial<ServerHeaders>>;

const body = JSON.stringify({
  data: "hello_world! response from typescript-http-server",
  errors: []
});

const onRequest = (_: ClientRequest, response: ServerResponse) => {
  response.writeHead(200, headers).end(body);
};

const onError = (error: ServerError) => {
  if (error.code === "EADDRINUSE") {
    console.error("Error: ", "Address is in use, change enviroment variables");
  }

  console.error("Error: ", error);
};

const onListening = () => {
  console.info("Listening: http://%s:%s/", options.host, options.port);
};

createServer()
  .on("request", onRequest)
  .on("error", onError)
  .on("listening", onListening)
  .listen(options) satisfies Server;
