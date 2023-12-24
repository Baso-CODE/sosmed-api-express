// LOGIC
// pertama cek dulu apakah variable  usernameOrEmail itu adalah email atau bukan
// kalau email cari data email tersebut di database
// kalau username cari data username tersebut di database
// kalau misalnya tidak ada datanya langsung return not Found
// kalau datanya ada baru kita cek password yang ada di database
// dengan password yang di masukka oleh user (req.body)
// kalau password nya sama retunn successfully

import { comparePasswords } from "../../helper/bcrypt";
import { excludeFields } from "../../helper/excludeFields";
import { createToken } from "../../helper/jwt";
import { findUserByEmail } from "../../repositories/users/findUserByEmail";
import { findUserByUsername } from "../../repositories/users/findUserByUsername";

export const loginUserAction = async (
  usernameOrEmail: string,
  password: string
) => {
  try {
    let user;

    if (usernameOrEmail.includes("@")) {
      user = await findUserByEmail(usernameOrEmail);
    } else {
      user = await findUserByUsername(usernameOrEmail);
    }

    if (!user) {
      return {
        status: 404,
        message: "Account not found",
      };
    }

    if (user.isDeleted) {
      return {
        status: 400,
        message: "Account deleted",
      };
    }

    const isPasswordValid = await comparePasswords(password, user.password);

    if (!isPasswordValid) {
      return {
        status: 400,
        message: "Invalid credentials",
      };
    }

    const dataWithoutPassword = excludeFields(user, ["password"]);

    const token = createToken({ id: user.id });

    return {
      status: 200,
      message: "login success",
      data: dataWithoutPassword,
      token,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
