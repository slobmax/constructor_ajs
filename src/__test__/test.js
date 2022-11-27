import Character from '../app';

test('character bowman undead', () => {
  const bowman = new Character('Bowman', 'Bowman');
  expect(bowman).toEqual({
    name: 'Bowman',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('character wordsman zombie', () => {
  const swordsman = new Character('Swordsman', 'Swordsman');
  expect(swordsman).toEqual({
    name: 'Swordsman',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('character magician daemon', () => {
  const magician = new Character('Magician', 'Magician');
  expect(magician).toEqual({
    name: 'Magician',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('genError', () => {
  function genErr() {
    Character('x', 'y');
  }
  expect(genErr).toThrow();
});
