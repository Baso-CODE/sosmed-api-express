// repositories/tweets/editTweet.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const editTweetRepo = async (tweetId: number, content: string) => {
  try {
    const updatedTweet = await prisma.tweet.update({
      where: {
        id: tweetId,
      },
      data: {
        content,
      },
    });

    return updatedTweet;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
