import { NextFunction, Request, Response } from "express";
import { deleteTweetAction } from "../../actions/tweets/deleteTweetAction";

export const deleteTweetController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const tweetId = req.params.tweetId;

    if (!tweetId) {
      return res.status(404).json({ msg: "Invalid tweet" });
    }
    const result = await deleteTweetAction(tweetId);
    res.status(204).json({ msg: "delete succesfull" });
  } catch (error) {
    next(error);
  }
};
