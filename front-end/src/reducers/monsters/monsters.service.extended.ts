import { API_URL } from "../../constants/env";
import { Battle } from "../../models/interfaces/battle.interface";

const battle = async ({
  monster1Id,
  monster2Id,
}: {
  monster1Id: string;
  monster2Id: string;
}): Promise<Battle> => {
  return await fetch(`${API_URL}/battle`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ monster1Id, monster2Id }),
  }).then((response) => response.json());
};

export const MonsterServiceExtended = {
  battle,
};
