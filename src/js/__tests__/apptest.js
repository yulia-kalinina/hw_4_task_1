import Team from "../app";

class Character {
  constructor(name) {
    this.name = name;
  }
}

const hero = new Character("Oleg");
const hero2 = new Character("Ivan");
const hero3 = new Character("Boris");
const team = new Team();

test("testing add of a new character", () => {
  team.add(hero);
  let result = "";
  team.members.forEach((obj) => {
    result = obj;
  });
  expect(result).toEqual({ name: "Oleg" });
});

test("testing add of the same character", () => {
  team.members.clear();
  team.add(hero);
  const newHero = new Character("Oleg");

  expect(() => {
    team.add(newHero);
  }).toThrow();
});

test("testing add of several characters", () => {
  team.members.clear();
  team.addAll(hero, hero2, hero3);

  let objOfCharacters = [];
  team.members.forEach((obj) => {
    objOfCharacters.push(obj);
    return objOfCharacters;
  });

  expect(objOfCharacters).toEqual([
    { name: "Oleg" },
    { name: "Ivan" },
    { name: "Boris" },
  ]);
});

test("testing to arr convertation", () => {
  team.members.clear();
  team.add(hero);

  let result = team.toArray();
  expect(result).toEqual([{ name: "Oleg" }]);
});
