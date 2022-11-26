export function Character(name, type) {
  const arrOfType = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
  if (name.length >= 2 && name.length <= 10 && arrOfType.includes(type)) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    if (type === 'Bowman' || type === 'Undead') {
      this.attack = 25;
      this.defence = 25;
    }
    if (type === 'Swordsman' || type === 'Zombie') {
      this.attack = 40;
      this.defence = 10;
    }
    if (type === 'Magician' || type === 'Daemon') {
      this.attack = 10;
      this.defence = 40;
    }
  } else {
    throw new Error('Некорректные значения');
  }
}

export const bowman = new Character('Bowman', 'Bowman');
export const swordsman = new Character('Swordsman', 'Swordsman');
export const magician = new Character('Magician', 'Magician');

export const bowmanTest = {
  name: 'Bowman',
  type: 'Bowman',
  health: 100,
  level: 1,
  attack: 25,
  defence: 25,
};

export const swordsmanTest = {
  name: 'Swordsman',
  type: 'Swordsman',
  health: 100,
  level: 1,
  attack: 40,
  defence: 10,
};

export const magicianTest = {
  name: 'Magician',
  type: 'Magician',
  health: 100,
  level: 1,
  attack: 10,
  defence: 40,
};
