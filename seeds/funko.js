const { Funko } = require("../models");

const funkodata = [
  {
    name: "Funko Pop - Movies - Grinch in Underwear",
    price: "49.99",
  },
  {
    name: "Funko Pop - Television - Wednesday Addams",
    price: "49.99",
  },
  {
    name: "Funko Pop - Anime - Monkey D. Luffy",
    price: "49.99",
  },
  {
    name: "Funko Pop - Anime - Boa Hancock",
    price: "49.99",
  },
  {
    name: "Funko Pop - Anime - Nami",
    price: "49.99",
  },
  {
    name: "Funko Pop - Anime - Sanji",
    price: "49.99",
  },
  {
    name: "Funko Pop - Anime - Roronoa Zoro",
    price: "49.99",
  },
  {
    name: "Funko Pop - Movies -Venomized Jack O Lantern",
    price: "49.99",
  },
  {
    name: "Funko Pop - Movies - Emily",
    price: "49.99",
  },
  {
    name: "Funko Pop - Artists - Britney Spears",
    price: "49.99",
  },
  {
    name: "Funko Pop - Movies - Zero With Bone (Chase)",
    price: "49.99",
  },
  {
    name: "Funko Pop - Movies - Scarlet Witch",
    price: "49.99",
  },
  {
    name: "Funko Pop - Artists - Selena",
    price: "49.99",
  },
  {
    name: "Funko Pop - Movies - Dracula",
    price: "49.99",
  },
  {
    name: "Funko Pop - Sports - Lebron James",
    price: "49.99",
  },
  {
    name: "Funko Pop - Sports - Koby Bryant",
    price: "49.99",
  },
  {
    name: "Funko Pop - Sports - Corey Seager",
    price: "49.99",
  },
  {
    name: "Funko Pop - Sports - Mookie Bets",
    price: "49.99",
  },
  {
    name: "Funko Pop - Sports - Cody bellinger",
    price: "49.99",
  },
];

const funkoInfo = () => funko.bulkCreate(funkodata);

module.exports = funkoInfo;