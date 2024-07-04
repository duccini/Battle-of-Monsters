import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/hooks";
import { MonsterBattleCard } from "../../components/monster-battle-card/MonsterBattleCard.extended";
import { MonstersList } from "../../components/monsters-list/MonstersList.extended";
import { Title } from "../../components/title/Title";
import { fetchMonstersData } from "../../reducers/monsters/monsters.actions";
import {
  selectMonsters,
  selectSelectedMonster,
} from "../../reducers/monsters/monsters.selectors";
import {
  BattleSection,
  PageContainer,
  StartBattleButton,
} from "./BattleOfMonsters.extended.styled";
import { selectRandomMonster } from "../../reducers/monsters/monsters.selectors.extended";

// import monsters2 from "../../monsters.json";

const BattleOfMonsters = () => {
  const dispatch = useAppDispatch();

  const monsters = useSelector(selectMonsters);
  const selectedMonster = useSelector(selectSelectedMonster);

  // Random Monster
  const randomMonster = useSelector(selectRandomMonster);

  useEffect(() => {
    dispatch(fetchMonstersData());
  }, [dispatch]);

  const handleStartBattleClick = () => {
    // Fight!
    alert("fight");
  };

  return (
    <PageContainer>
      <Title>Battle of Monsters</Title>

      <MonstersList monsters={monsters} />

      <BattleSection>
        <MonsterBattleCard
          title={selectedMonster?.name || "Player"}
          monster={selectedMonster || null}
        ></MonsterBattleCard>
        <StartBattleButton
          data-testid="start-battle-button"
          disabled={selectedMonster === null}
          onClick={handleStartBattleClick}
        >
          Start Battle
        </StartBattleButton>
        <MonsterBattleCard
          monster={randomMonster || null}
          title="Computer"
        ></MonsterBattleCard>
      </BattleSection>
    </PageContainer>
  );
};

export { BattleOfMonsters };
