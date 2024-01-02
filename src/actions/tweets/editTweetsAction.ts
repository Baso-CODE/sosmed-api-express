// actions/tweets/editTweetAction.ts
import { editTweetRepo } from "../../repositories/tweets/editTweetRepo";

export const editTweetAction = async (tweetId: number, content: string) => {
  try {
    const updatedTweet = await editTweetRepo(tweetId, content);
    return updatedTweet;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
