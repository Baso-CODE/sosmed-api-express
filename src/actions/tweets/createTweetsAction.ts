// tweetActions.ts

import { createTweetRepo } from "../../repositories/tweets/createTweetRepo";
import { getTweetsRepo } from "../../repositories/tweets/getTweetsRepo";
import { ITweet } from "../../types/tweet.type";

export const getTweetsAction = async (): Promise<ITweet[]> => {
  try {
    const tweets = await getTweetsRepo();
    return tweets;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createTweetAction = async (
  content: string,
  userId: number,
  createdAt: Date
): Promise<ITweet> => {
  try {
    const tweet = await createTweetRepo(content, userId, createdAt);
    return tweet;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
