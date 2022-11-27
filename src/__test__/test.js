import Character from '../app';

test('character bowman undead', () => {
  const bowman = new Character('Bowman', 'Bowman');
  expect(bowman.attack).toBe(25);
  expect(bowman.defence).toBe(25);
});

test('character wordsman zombie', () => {
  const swordsman = new Character('Swordsman', 'Swordsman');
  expect(swordsman.attack).toBe(40);
  expect(swordsman.defence).toBe(10);
});

test('character magician daemon', () => {
  const magician = new Character('Magician', 'Magician');
  expect(magician.attack).toBe(10);
  expect(magician.defence).toBe(40);
});

test('genError', () => {
  function genErr() {
    Character('x', 'y');
  }
  expect(genErr).toThrow();
});
