// controllers/tweets/editTweetController.ts
import { Request, Response, NextFunction } from "express";
import { editTweetAction } from "../../actions/tweets/editTweetsAction";

export const editTweetController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { tweetId } = req.params;
    const { content } = req.body;

    const updatedTweet = await editTweetAction(Number(tweetId), content);

    res.status(200).json({
      status: 200,
      message: "Tweet updated successfully",
      data: updatedTweet,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
