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
import {
  monsterWins,
  selectRandomMonster,
} from "../../reducers/monsters/monsters.selectors.extended";
import { fetchBattleWins } from "../../reducers/monsters/monsters.actions.extended";
import { WinnerDisplay } from "../../components/winner-display/WinnerDisplay";

// import monsters2 from "../../monsters.json";

const BattleOfMonsters = () => {
  const dispatch = useAppDispatch();

  const monsters = useSelector(selectMonsters);
  const selectedMonster = useSelector(selectSelectedMonster);
  const winner = useSelector(monsterWins);

  // Random Monster
  const randomMonster = useSelector(selectRandomMonster);

  useEffect(() => {
    dispatch(fetchMonstersData());
  }, [dispatch]);

  const handleStartBattleClick = () => {
    // Fight!
    if (selectedMonster && randomMonster) {
      dispatch(
        fetchBattleWins({
          monster1Id: selectedMonster.id,
          monster2Id: randomMonster.id,
        }),
      );
    }
  };

  return (
    <PageContainer>
      <Title>Battle of Monsters</Title>

      <MonstersList monsters={monsters} />

      {winner && <WinnerDisplay text={winner?.winner.name} />}

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
          title={randomMonster?.name || "Computer"}
        ></MonsterBattleCard>
      </BattleSection>
    </PageContainer>
  );
};

export { BattleOfMonsters };
