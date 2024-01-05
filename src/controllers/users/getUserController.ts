import { NextFunction, Request, Response } from "express";
import { getUserOtherProfileAction } from "../../actions/users/getUserOtherProfileAction";

export const getUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const user = await getUserOtherProfileAction(Number(id));
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
