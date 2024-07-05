import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Monster } from "../../models/interfaces/monster.interface";
import { MonsterServiceExtended } from "./monsters.service.extended";
import { Battle } from "../../models/interfaces/battle.interface";

export const fetchBattleWins = createAsyncThunk(
  // { monsterId1: string; monsterId2: string }
  "monsters/fetchBattleWins",
  MonsterServiceExtended.battle,
);

export const setWinner = "TODO";

export const clearWinner = createAction("monster/setClearWinner");

export const setRandomMonster = createAction<Monster | null>(
  "monsters/setRandomMonster",
);
