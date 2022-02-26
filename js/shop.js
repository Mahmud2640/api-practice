const shop = {
  name: "Taher Store",
  address: "Rustom Ali Collage Road",
  profit: 20000,
  products: ["Chal", "Ata", "Moydaaa", "Suji", "Paij", "Rosun"],
  owner: { name: "Abu Taher", Number: "01828155839" },
  isExpensive: false
};

const shopStringFild = JSON.stringify(shop);
console.log(shopStringFild);
const convarted = JSON.parse(shopStringFild);
console.log(convarted);