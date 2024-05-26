import express, { NextFunction, Request, Response } from "express";

const server = express();

server.use(express.json());

server.get("/", (request: Request, response: Response, next: NextFunction) => {
    response.send("GET Root");
});

server.get("/aaa", (request: Request, response: Response, next: NextFunction) => {
    response.send("GET aaa");
});

server.get("/bbb/:value", (request: Request, response: Response, next: NextFunction) => {
    console.log(request.params.value);
    response.send("GET bbb, value: " + request.params.value);
});

server.post("/ccc", (request: Request, response: Response, next: NextFunction) => {
    console.log(request.body);
    response.send("POST ccc, body: " + JSON.stringify(request.body));
});

server.listen(4000, () => console.log("Listening..."));
