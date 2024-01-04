import { prisma } from "../../helper/prisma";

export const getTweetsByUserIdRepo = async (userId: string) => {
  try {
    const tweets = await prisma.tweet.findMany({
      where: {
        userId: parseInt(userId),
      },
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
