import { deleteTweetRepo } from "../../repositories/tweets/deleteTweetRepo";

export const deleteTweetAction = async (tweetId: string) => {
  try {
    await deleteTweetRepo(tweetId);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
