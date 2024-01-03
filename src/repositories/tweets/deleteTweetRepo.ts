import { prisma } from "../../helper/prisma";

export const deleteTweetRepo = async (tweetId: string) => {
  try {
    await prisma.tweet.delete({
      where: {
        id: parseInt(tweetId),
      },
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};
