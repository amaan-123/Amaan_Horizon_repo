let is_shop_open = true;

let stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let toppings_choice = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("which topping would you love?"));
    }, 3000);
  });
};

async function kitchen() {
  console.log("a");
  console.log("b");
  console.log("c");

  await toppings_choice();

  console.log("d");
  console.log("e");
}

kitchen();

console.log("doing dishes");
console.log("cleaning the table");
console.log("taking others order");