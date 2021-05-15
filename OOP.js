const Animal = function (name) {
  (this.name = name), (this.children = []);
};

Animal.prototype.addChildren = function (childName) {
  this.children.push(childName);
};

const hamster = new Animal("Bobik");
hamster.addChildren("Neo");

const dog1 = new Animal("Borowa");
dog1.addChildren("Antek1");

const dog2 = new Animal("Antek");
dog2.addChildren("Antek2");
