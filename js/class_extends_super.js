/*
 * Наследование
 *  - extends
 *  - super()
 */

class Hero {
  constructor({ name = 'hero', xp = 0, hp = 100, mp = 25, wepon = 'knife' } = {}) {
    this.name = name;
    this.xp = xp;
    this.hp = hp;
    this.mp = mp;
    this.wepon = wepon;
  }
  gainXP(amount) {
    console.log(`${this.name} get ${amount} xp`);
    this.xp += amount;
  }
}

class Warrior extends Hero {
  constructor({ wepon = 'Sword', xp = 2000, ...rest } = {}) {
    super({ ...rest }); // чтобы передавался в конструктор отца
    this.wepon = wepon;
    this.xp = xp;
  }
  attack() {
    console.log(`${this.name} attack with ${this.wepon} and get some XP`);
    this.xp += 10;
  }
}

class Barbarian extends Warrior {
  constructor({ xp = 3000, wepon = 'Axe', hp = 255, ...rest } = {}) {
    super(rest);
    this.xp = xp;
    this.wepon = wepon;
    this.hp = 255;
  }
  warCry() {
    console.log(`${this.name} shout 'WaaaaR!'`);
  }
}

class Mage extends Hero {
  constructor({ wepon = 'Black Stuff', mp = 200, xp = 2000, ...rest } = {}) {
    super(rest);
    this.wepon = wepon;
    this.mp = mp;
    this.xp = xp;
  }
  castSpell() {
    console.log(`${this.name} cast spell with ${this.wepon} and get some XP`);
    this.xp += 10;
  }
}

class Necromant extends Mage {
  constructor({ xp = 3000, mp = 255, wepon = 'Stuff with scull', ...rest } = {}) {
    super(rest);
    this.xp = xp;
    this.mp = mp;
    this.wepon = wepon;
  }
  resurrect() {
    console.log(`${this.name} resurrect a createre `);
  }
}

const darkwarrior = new Warrior({ name: 'DARKWARRIOR' });
console.log(`DARKWARRIOR`, darkwarrior);
darkwarrior.gainXP(1000);
darkwarrior.attack();

const gendalf = new Necromant({ name: 'GENDALF' });
console.log(gendalf);
gendalf.gainXP(1000);
gendalf.castSpell();
gendalf.resurrect();

const conan = new Barbarian({ name: 'CONAN' });
console.log(conan);
conan.attack();
conan.warCry();
