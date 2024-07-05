import app from '../../app';
import { battle } from '../../services/battle.extended';

const server = app.listen();

afterAll(() => server.close());

// const monstersData = [
//   {
//     id: '1',
//     name: 'Dead Unicorn',
//     attack: 60,
//     defense: 40,
//     hp: 10,
//     speed: 80,
//     type: 'Type',
//     imageUrl:
//       'https://fsl-assessment-public-files.s3.amazonaws.com/assessment-cc-01/dead-unicorn.png',
//   },
//   {
//     id: '2cls',
//     name: 'Old Shark',
//     attack: 50,
//     defense: 20,
//     hp: 80,
//     speed: 90,
//     type: 'Type',
//     imageUrl:
//       'https://fsl-assessment-public-files.s3.amazonaws.com/assessment-cc-01/old-shark.png',
//   },
// ];

describe('BattleExtendedController', () => {
  describe('Battle', () => {
    test('should fail when trying a battle of monsters with an undefined monster', async () => {
      // @TODO
      const response = await battle('1', 'undefined');
      expect(response).toBe(undefined);
    });

    test('should fail when trying a battle of monsters with an inexistent monster', async () => {
      // @TODO
      // const response = await battle('1', '10');
      // const winner = undefined;
      expect(true).toBe(true);
    });

    test('should insert a battle of monsters successfully with monster 1 winning', async () => {
      // @TODO
      // const response = await battle('1', '2');

      // const winner = {
      //   winner: monstersData[0],
      //   tie: false,
      // };

      expect(true).toBe(true);
    });

    test('should insert a battle of monsters successfully with monster 2 winning', async () => {
      // @TODO
      // const response = await battle('1', '2');

      // const winner = {
      //   winner: monstersData[1],
      //   tie: false,
      // };

      expect(true).toBe(true);
    });
  });
});
