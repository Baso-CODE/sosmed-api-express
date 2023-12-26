import express, { NextFunction, Response, Request } from "express";
import cors from "cors";
import usersRouters from "./routers/usersRouters";
import tweetsRouters from "./routers/tweetsRouters";
const PORT = process.env.PORT || 7000;
const app = express();

app.use(cors());
app.use(express.json());

// middleware error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(400).send(err.message);
});

app.use("/users", usersRouters);
app.use("/tweets", tweetsRouters);

app.listen(PORT, () => {
  console.log(`server listening on: ${PORT}`);
});
