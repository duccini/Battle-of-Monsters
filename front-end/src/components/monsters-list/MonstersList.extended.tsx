import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { Monster } from "../../models/interfaces/monster.interface";
import { setSelectedMonster } from "../../reducers/monsters/monsters.actions";
import {
  Image,
  ListTitle,
  MonsterCard,
  MonsterName,
  MonstersSection,
} from "./MonstersList.styled";
import {
  clearWinner,
  setRandomMonster,
} from "../../reducers/monsters/monsters.actions.extended";

type MonstersListProps = {
  monsters: Monster[];
};

const MonstersList: React.FC<MonstersListProps> = ({
  monsters,
}: MonstersListProps) => {
  const dispatch = useAppDispatch();

  const [selectedMonsterId, setSelectedMonsterId] = useState<string | null>(
    null,
  );

  const getRandomMonsterIndex = (monster: Monster): number => {
    const index = Math.floor(Math.random() * monsters.length);

    if (monster.id === monsters[index].id) {
      return getRandomMonsterIndex(monster);
    }

    return index;
  };

  const handleMonsterClick = (monster: Monster) => {
    const value = selectedMonsterId === monster.id ? null : monster.id;
    setSelectedMonsterId(value);
    dispatch(setSelectedMonster(!value ? null : monster));

    const randomIndex = getRandomMonsterIndex(monster);

    // console.log(randomIndex);

    dispatch(setRandomMonster(monsters[randomIndex]));

    dispatch(clearWinner());
  };

  return (
    <div>
      <ListTitle>
        {monsters.length > 0 ? "Select your monster" : "No monsters available"}
      </ListTitle>

      <MonstersSection data-testid="monsters-list-section">
        {monsters.map((monster) => (
          <MonsterCard
            key={monster.id}
            onClick={() => handleMonsterClick(monster)}
            selected={monster.id === selectedMonsterId}
            data-testid={monster.id}
          >
            <Image src={monster.imageUrl} />
            <MonsterName>{monster.name}</MonsterName>
          </MonsterCard>
        ))}
      </MonstersSection>
    </div>
  );
};

export { MonstersList };
