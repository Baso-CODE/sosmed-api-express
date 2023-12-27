import { findUsersToFollowRepo } from "../../repositories/users/findUsersToFollow";

export const findUsersToFollowAction = async () => {
  try {
    const users = await findUsersToFollowRepo();
    return {
      status: 200,
      message: "Success",
      data: users,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
