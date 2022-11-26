import {
  Character,
  bowman,
  swordsman,
  magician,
  bowmanTest,
  swordsmanTest,
  magicianTest,
} from '../app';

test('character', () => {
  expect(bowman).toEqual(bowmanTest);
  expect(swordsman).toEqual(swordsmanTest);
  expect(magician).toEqual(magicianTest);
});

test('genError', () => {
  function genErr() {
    Character('x', 'y');
  }
  expect(genErr).toThrow();
});
