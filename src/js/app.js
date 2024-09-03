export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(newCharacterObj) {
    this.members.forEach((obj) => {
      if (obj.name === newCharacterObj.name) {
        throw new Error("Герой с таким именем уже есть в команде");
      }
      return;
    });
    this.members.add(newCharacterObj);
  }

  addAll(...newCharacters) {
    newCharacters.forEach((obj) => {
      this.add(obj);
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}
