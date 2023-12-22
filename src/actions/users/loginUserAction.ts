// LOGIC
// pertama cek dulu apakah variable  usernameOrEmail itu adalah email atau bukan
// kalau email cari data email tersebut di database
// kalau username cari data username tersebut di database
// kalau misalnya tidak ada datanya langsung return not Found
// kalau datanya ada baru kita cek password yang ada di database
// dengan password yang di masukka oleh user (req.body)
// kalau password nya sama retunn successfully

import { compirePassword } from "../../helper/bcrypt";
import { excludeFields } from "../../helper/excludeFields";
import { findUserByEmail } from "../../repositories/users/findUserByEmail";
import { findUserByUsername } from "../../repositories/users/findUserByUsername";

export const loginUserAction = async (
  usernameOrEmail: string,
  password: string
) => {
  let user;
  if (usernameOrEmail.includes("@")) {
    // find user by email
    user = await findUserByEmail(usernameOrEmail);
  } else {
    // find user by username
    user = await findUserByUsername(usernameOrEmail);
  }
  if (!user) {
    return {
      status: 400,
      message: "Account not found",
    };
  }
  if (user.isDeleted) {
    return {
      status: 400,
      message: "Account deleted",
    };
  }
  const isPasswordValid = await compirePassword(password, user.password);
  if (!isPasswordValid) {
    return {
      status: 400,
      message: "Invalid password",
    };
  }

  const dataWithoutPassword = excludeFields(user, ["password"]);

  try {
    return {
      status: 200,
      message: "Login successfully",
      data: dataWithoutPassword,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
