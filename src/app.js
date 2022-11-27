export default function Character(name, type) {
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
