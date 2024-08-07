import { Id, RelationMappings } from 'objection';
import Base from './base';
import { Monster } from './monster.extended.model';

export class Battle extends Base {
  id!: Id;
  monsterA!: Monster;
  monsterB!: Monster;
  winner!: Monster;

  static tableName = 'battle';

  static get relationMappings(): RelationMappings {
    return {
      monsterARelation: {
        relation: Monster.BelongsToOneRelation,
        modelClass: Monster,
        join: {
          from: 'monster.id',
          to: 'battle.id',
        },
      },
      monsterBRelation: {
        relation: Monster.BelongsToOneRelation,
        modelClass: Monster,
        join: {
          from: 'monster.id',
          to: 'battle.id',
        },
      },
      winnerRelation: {
        relation: Monster.BelongsToOneRelation,
        modelClass: Monster,
        join: {
          from: 'monster.id',
          to: 'battle.id',
        },
      },
    };
  }
}
