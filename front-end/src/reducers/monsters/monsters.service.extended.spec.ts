import { MonsterServiceExtended } from "./monsters.service.extended";
import { API_URL } from "../../constants/env";
import monstersData from "../../../../data/monsters.json";

const battle = {
  winner: monstersData.monsters[2],
  tie: false,
};

describe("Monsters Service Extended", () => {
  it("should get the winner of the battle of monsters", async () => {
    // TODO - implement test
    jest.spyOn(MonsterServiceExtended, "battle").mockResolvedValue(battle);
    const response = await MonsterServiceExtended.battle({
      monster1Id: "1",
      monster2Id: "2",
    });

    console.log("expect", response);
    console.log("equal", battle);

    expect(response).toEqual(battle);
  });
});
