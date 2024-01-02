import express from "express";
import {
  createTweetController,
  getTweetsController,
} from "../controllers/tweets/createTweetContoller";
import { editTweetController } from "../controllers/tweets/editTweetControllers";

const router = express.Router();

router.post("/create", createTweetController);
router.get("/usertweets", getTweetsController);
router.patch("/:tweetId", editTweetController);

export default router;
