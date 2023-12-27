import { NextFunction, Request, Response } from "express";
import { findUsersToFollowAction } from "../../actions/users/findUsersToFollowAction";

export const findUsersToFollowController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await findUsersToFollowAction();
    res.status(result.status).json(result);
  } catch (error) {
    next(error);
  }
};
