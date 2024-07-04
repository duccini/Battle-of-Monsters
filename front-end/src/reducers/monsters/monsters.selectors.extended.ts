import { RootState } from "../../app/store";

export const monsterWins = "TODO";
export const randomMonsters = "TODO";

export const selectRandomMonster = (state: RootState) =>
  state.monstersExtended.selectRandomMonster;
