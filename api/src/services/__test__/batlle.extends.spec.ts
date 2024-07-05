import app from '../../app';
import { findMonsterById, setBattle } from '../../services/battle.extended';
import request from 'supertest';

const server = app.listen();

afterAll(() => server.close());

describe('BattleExtendedService', () => {
  describe('Battle', () => {
    test('should find the first monster', async () => {
      const monsters = await await request(server).get('/monsters');
      const response = await findMonsterById('1');

      expect(monsters.body[0]).toEqual(response);
    });

    test('should find the first attacker and return monster 1', async () => {
      const monsters = await await request(server).get('/monsters');
      const response = await setBattle(monsters.body[1], monsters.body[2]);

      // console.log(monsters.body);

      expect(monsters.body[1]).toEqual(response);
      // expect(true).toEqual(true);
    });

    test('should find the first attacker and return monster 2', async () => {
      const monsters = await await request(server).get('/monsters');
      const response = await setBattle(monsters.body[0], monsters.body[1]);

      expect(monsters.body[1]).toEqual(response);
      // expect(true).toEqual(true);
    });
  });
});
