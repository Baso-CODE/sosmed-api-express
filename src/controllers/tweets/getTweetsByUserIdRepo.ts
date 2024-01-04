import { NextFunction, Request, Response } from "express";
import { getTweetsByUserIdAction } from "../../actions/tweets/getTweetsByUserIdAction";

export const getTweetsByUserIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.params.userId;

  if (!userId) {
    return res.status(400).json({ msg: "User ID is required" });
  }
  try {
    const tweets = await getTweetsByUserIdAction(userId);
    res.status(200).json(tweets);
  } catch (error) {
    console.error(error);
    next(error);
  }
};
