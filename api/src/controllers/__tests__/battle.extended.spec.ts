import app from '../../app';
import { battle } from '../../services/battle.extended';
import request from 'supertest';

const server = app.listen();

afterAll(() => server.close());

describe('BattleExtendedController', () => {
  describe('Battle', () => {
    test('should fail when trying a battle of monsters with an undefined monster', async () => {
      // @TODO
      const response = await battle('1', 'undefined');
      expect(response).toBe(undefined);
    });

    test('should fail when trying a battle of monsters with an inexistent monster', async () => {
      // @TODO
      const response = await battle('1', '10');
      const winner = undefined;

      expect(response).toBe(winner);
    });

    test('should insert a battle of monsters successfully with monster 1 winning', async () => {
      // @TODO
      const monsters = await await request(server).get('/monsters');
      const response = await battle('5', '1');

      const winner = {
        winner: monsters.body[4],
        tie: false,
      };

      expect(winner.winner).toEqual(response);
    });

    test('should insert a battle of monsters successfully with monster 2 winning', async () => {
      // @TODO
      const monsters = await await request(server).get('/monsters');
      const response = await battle('1', '5');

      const winner = {
        winner: monsters.body[4],
        tie: false,
      };

      expect(winner.winner).toEqual(response);
    });
  });
});
