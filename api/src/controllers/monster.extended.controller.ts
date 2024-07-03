import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export const list = async (req: Request, res: Response): Promise<Response> => {
  // @TODO
  // return res.status(StatusCodes.BAD_REQUEST);
  return res.status(StatusCodes.ACCEPTED);
  // return res.status(StatusCodes.OK).send('Ola mundo');
};

export const MonsterExtendedController = {
  list,
};
