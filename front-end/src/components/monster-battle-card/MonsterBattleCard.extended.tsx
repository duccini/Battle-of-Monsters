// import { LinearProgress } from "@mui/material";
import { Monster } from "../../models/interfaces/monster.interface";
import {
  BattleMonsterCard,
  BattleMonsterTitle,
  MonsterImage,
  ProgressBar,
  Separator,
  Skill,
  SkillList,
} from "./MonsterBattleCard.extended.styled";

type MonsterCardProps = {
  monster?: Monster | null;
  title?: string;
};

const MonsterBattleCard: React.FC<MonsterCardProps> = ({
  monster,
  title,
}: MonsterCardProps) => {
  return monster ? (
    <BattleMonsterCard>
      <MonsterImage src={monster?.imageUrl} />
      <BattleMonsterTitle>{title!}</BattleMonsterTitle>
      <Separator />
      <SkillList>
        <Skill>
          <h3>HP</h3>
          <ProgressBar variant="determinate" value={monster.hp} />
        </Skill>
        <Skill>
          <h3>Attack</h3>
          <ProgressBar variant="determinate" value={monster.attack} />
        </Skill>
        <Skill>
          <h3>Defense</h3>
          <ProgressBar variant="determinate" value={monster.defense} />
        </Skill>
        <Skill>
          <h3>Speed</h3>
          <ProgressBar variant="determinate" value={monster.speed} />
        </Skill>
      </SkillList>
    </BattleMonsterCard>
  ) : (
    <BattleMonsterCard centralized>
      <BattleMonsterTitle>{title!}</BattleMonsterTitle>
    </BattleMonsterCard>
  );
};

export { MonsterBattleCard };
