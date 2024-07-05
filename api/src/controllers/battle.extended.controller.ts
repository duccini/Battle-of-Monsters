import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { battle } from '../services/battle.extended';

const create = async (req: Request, res: Response): Promise<Response> => {
  const { monster1Id, monster2Id } = req.body;

  // console.log(monster1Id, monster2Id);

  const winner = await battle(monster1Id, monster2Id);

  // console.log(winner);

  return res.status(StatusCodes.OK).json({
    winner,
    tie: false,
  });
};

export const BattleExtendedController = {
  create,
};
