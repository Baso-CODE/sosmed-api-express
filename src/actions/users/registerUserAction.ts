// LOGIC
// CARI EMAIL / USERNAME  DI DATABASE
// KALAU ADA LANGSUNG RETURN EMAIL / USERNAME YANG TELAH DI GUNAKAN
// KALAU TIDAK ADA YANG MENGGUNAKAN EMAIL / USERNAME TERSEBUT CREATE KE DATABASE

import { createUser } from "../../repositories/users/createUser";
import { findUsersByEmailAndUsername } from "../../repositories/users/findUsersByEmailAndUsername";
import { IUser } from "../../types/user.type";

export const registerUserAction = async (data: IUser) => {
  try {
    // cari email di databse
    const { email, username } = data;
    const users = await findUsersByEmailAndUsername(email, username);

    //cek email atau username udah ada yang pake tidak
    if (users.length) {
      return {
        status: 400,
        message: "email or username already exists",
      };
    }

    // crate user di database
    await createUser(data);
    return {
      status: 200,
      message: "User created successfully",
    };
    console.log(users);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
