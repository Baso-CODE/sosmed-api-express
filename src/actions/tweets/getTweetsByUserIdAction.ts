import { getTweetsByUserIdRepo } from "../../repositories/tweets/getTweetsByUserIdRepo";

export const getTweetsByUserIdAction = async (userId: string) => {
  try {
    const tweets = await getTweetsByUserIdRepo(userId);
    return tweets;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
