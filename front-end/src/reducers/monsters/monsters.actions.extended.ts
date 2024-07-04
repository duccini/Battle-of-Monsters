import { createAction } from "@reduxjs/toolkit";
import { Monster } from "../../models/interfaces/monster.interface";

export const fetchBattleWins = "TODO";

export const setWinner = "TODO";

export const setRandomMonster = createAction<Monster | null>(
  "monsters/setRandomMonster",
);
