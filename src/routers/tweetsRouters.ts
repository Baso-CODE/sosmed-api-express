import express from "express";
import {
  createTweetController,
  getTweetsController,
} from "../controllers/tweets/createTweetContoller";
import { editTweetController } from "../controllers/tweets/editTweetControllers";
import { deleteTweetController } from "../controllers/tweets/deleteTweetContoller";
import { getTweetsByUserIdController } from "../controllers/tweets/getTweetsByUserIdRepo";

const router = express.Router();

router.post("/create", createTweetController);
router.get("/usertweets", getTweetsController);
router.patch("/:tweetId", editTweetController);
router.delete("/:tweetId", deleteTweetController);
router.get("/usertweets/:userId", getTweetsByUserIdController);

export default router;
