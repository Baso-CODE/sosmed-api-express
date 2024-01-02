import { prisma } from "../../helper/prisma";
import { ITweet } from "../../types/tweet.type";

export const getTweetsRepo = async (): Promise<ITweet[]> => {
  try {
    const tweets = await prisma.tweet.findMany({
      include: {
        user: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return tweets;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
