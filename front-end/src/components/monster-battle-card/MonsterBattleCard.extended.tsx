import { Monster } from "../../models/interfaces/monster.interface";
import {
  BattleMonsterCard,
  BattleMonsterTitle,
} from "./MonsterBattleCard.extended.styled";

type MonsterCardProps = {
  monster?: Monster | null;
  title?: string;
};

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ monster, title }) => {
  console.log(monster?.imageUrl);
  return (
    <BattleMonsterCard centralized>
      <BattleMonsterTitle>{title!}</BattleMonsterTitle>
    </BattleMonsterCard>
  );
};

export { MonsterBattleCard };
