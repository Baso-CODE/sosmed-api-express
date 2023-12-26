import { Request, Response } from "express";

import { ITweet } from "../../types/tweet.type";
import {
  createTweetAction,
  getTweetsAction,
} from "../../actions/tweets/createTweetsAction";

export const getTweetsController = async (_req: Request, res: Response) => {
  try {
    const tweets: ITweet[] = await getTweetsAction();
    res.status(200).json(tweets);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createTweetController = async (req: Request, res: Response) => {
  const { content, userId, createdAt } = req.body;

  if (!content || !userId) {
    return res.status(400).json({ error: "Content and userId are required" });
  }

  try {
    const tweet: ITweet = await createTweetAction(content, userId, createdAt);
    res.status(201).json(tweet);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
