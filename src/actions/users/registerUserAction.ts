// LOGIC
// CARI EMAIL / USERNAME  DI DATABASE
// KALAU ADA LANGSUNG RETURN EMAIL / USERNAME YANG TELAH DI GUNAKAN
// KALAU TIDAK ADA YANG MENGGUNAKAN EMAIL / USERNAME TERSEBUT CREATE KE DATABASE

import { hashPassword } from "../../helper/bcrypt";
import { createUser } from "../../repositories/users/createUser";
import { findUsersByEmailAndUsername } from "../../repositories/users/findUsersByEmailAndUsername";
import { IUser } from "../../types/user.type";

export const registerUserAction = async (data: IUser) => {
  try {
    const { email, username, password } = data;
    const users = await findUsersByEmailAndUsername(email, username);

    if (users.length) {
      return {
        status: 400,
        message: "email or username already exists",
      };
    }
    const hashedPassword = await hashPassword(password);
    data.password = hashedPassword;
    await createUser(data);
    return {
      status: 200,
      message: "User created successfully",
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
