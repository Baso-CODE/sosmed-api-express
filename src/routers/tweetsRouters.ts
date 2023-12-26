import express from "express";
import {
  createTweetController,
  getTweetsController,
} from "../controllers/tweets/createTweetContoller";

const router = express.Router();

router.post("/create", createTweetController);
router.get("/usertweets", getTweetsController);

export default router;
