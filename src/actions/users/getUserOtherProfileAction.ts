import { findUserById } from "../../repositories/users/findUserById";

export const getUserOtherProfileAction = async (id: number) => {
  try {
    const user = await findUserById(id);
    return user;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
