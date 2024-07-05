import { Battle, Monster } from '../models';

export const battle = async (
  monster1Id: string,
  monster2Id: string
): Promise<Monster | undefined> => {
  const monster1 = await findMonsterById(monster1Id);
  const monster2 = await findMonsterById(monster2Id);

  if (monster1 == undefined || monster2 == undefined) {
    return undefined;
  }

  let attacker = setBattle(monster1, monster2);

  let winner = null;

  while (!winner) {
    if (attacker?.id === monster1.id) {
      // change the attacker
      attacker = monster2;
      // console.log('Atacante: ' + monster1.name);
      if (
        monster1.attack === monster2?.defense ||
        monster1.attack < monster2?.defense
      ) {
        monster2.hp = monster2.hp - 1;
      } else {
        monster2.hp = monster2.hp - (monster1.attack - monster2.defense);
      }
    } else if (
      monster2.attack === monster1?.defense ||
      monster2.attack < monster1?.defense
    ) {
      // change the attacker
      attacker = monster1;
      // console.log('Atacante: ' + monster2.name);
      monster1.hp = monster1.hp - 1;
    } else {
      // change the attacker
      attacker = monster1;
      // console.log('Atacante: ' + monster2.name);
      monster1.hp = monster1.hp - (monster2.attack - monster1.defense);
    }

    if (monster1.hp <= 0) {
      winner = monster2;
      // console.log('Vencedor: ' + winner.name);
    } else if (monster2.hp <= 0) {
      winner = monster1;
      // console.log('Vencedor: ' + winner.name);
    }
  }

  // console.log(winner);
  if (winner) {
    const battle = await Battle.query().insert({
      winner,
      monsterA: monster1,
      monsterB: monster2,
    });
  }

  return winner;
};

export const findMonsterById = async (
  monsterId: string
): Promise<Monster | undefined> => {
  if (!monsterId) {
    return undefined;
  }
  return await Monster.query().findById(monsterId);
};

export const setBattle = (monster1: Monster, monster2: Monster): Monster => {
  let attacker = null;

  if (monster1.speed !== monster2.speed) {
    if (monster1.speed > monster2.speed) {
      attacker = monster1;
    } else {
      attacker = monster2;
    }
  } else {
    if (monster1.attack > monster2.attack) {
      attacker = monster1;
    } else {
      attacker = monster2;
    }
  }

  return attacker;
};
