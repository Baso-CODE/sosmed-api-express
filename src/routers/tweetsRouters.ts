import express from "express";
import {
  createTweetController,
  getTweetsController,
} from "../controllers/tweets/createTweetContoller";
import { editTweetController } from "../controllers/tweets/editTweetControllers";
import { deleteTweetController } from "../controllers/tweets/deleteTweetContoller";

const router = express.Router();

router.post("/create", createTweetController);
router.get("/usertweets", getTweetsController);
router.patch("/:tweetId", editTweetController);
router.delete("/:tweetId", deleteTweetController);

export default router;
