import { prisma } from "../../helper/prisma";
import { ITweet } from "../../types/tweet.type";

export const createTweetRepo = async (
  content: string,
  userId: number,
  createdAt: Date
): Promise<ITweet> => {
  try {
    const tweet = await prisma.tweet.create({
      data: {
        content,
        userId,
        createdAt,
      },
      include: {
        user: true,
      },
    });
    return tweet;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
