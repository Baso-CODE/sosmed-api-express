import { prisma } from "../../helper/prisma";

export const findUsersToFollowRepo = async () => {
  try {
    const usersToFollow = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
      },
    });

    return usersToFollow;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
