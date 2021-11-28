const data = [
  {
    breakfast: [
      {
        title: "Egg Benedict",
        price: 13.45,
        desc: "Our famous egg benedict",
        src: "../images/breakfast/Eggs_Benedict.jpg",
      },
      {
        title: "Vegan Yogurt",
        price: 12.95,
        desc: "Our famous vegan yogurt",
        src: "../images/breakfast/Vegan_Yogurt.jpg",
      },
      {
        title: "Waffles",
        price: 10.0,
        desc: "Our famous waffles",
        src: "../images/breakfast/Waffles_with_Strawberries.jpg",
      },
      {
        title: "Cereal",
        price: 15.95,
        desc: "A summer classic cereal!",
        src: "../images/breakfast/breakfast_cereal.jpg",
      },
      {
        title: "Yam 'n' Egg",
        price: 19.2,
        desc: "Our favorite Yam 'n' Egg!",
        src: "../images/breakfast/yam_'n'_egg.jpg",
      },
    ],
  },
  {
    lunch: [
      {
        title: "Abula Special",
        price: 25.2,
        desc: "Classic African Continental Dish!",
        src: "../images/lunch/abula_special.jpg",
      },
      {
        title: "Abacha",
        price: 23.2,
        desc: "Classic African Continental Dish!",
        src: "../images/lunch/abacha.webp",
      },
      {
        title: "Ewa Agoyi",
        price: 19.8,
        desc: "Classic African Continental Dish!",
        src: "../images/lunch/ewa_agoyin_nd_bread.webp",
      },
      {
        title: "Ikokore",
        price: 19.8,
        desc: "Classic African Continental Dish!",
        src: "../images/lunch/water_yam_pottage.jpg",
      },
      {
        title: "Semo 'n' Ogbono",
        price: 23.2,
        desc: "Classic meal!",
        src: "../images/lunch/semo_nd_ogbono.jpg",
      },
    ],
  },
  {
    dinner: [
      {
        title: "Chic 'n' Chips",
        price: 29.6,
        desc: "Tasty Chicken 'n' Chips!",
        src: "../images/dinner/chicken_n_chips.jpg",
      },
      {
        title: "Pizza",
        price: 31.0,
        desc: "Classic Pizza!",
        src: "../images/dinner/pizza.jpg",
      },
      {
        title: "Dinner Salad",
        price: 30.2,
        desc: "For a Classic Dinner!",
        src: "../images/dinner/salad_for_dinner.jpg",
      },
      {
        title: "Jollof Rice",
        price: 32.3,
        desc: "Delicious meal for U!",
        src: "../images/dinner/jollof_rice.jpg",
      },
      {
        title: "Spaghetti",
        price: 33.2,
        desc: "Yummy Pasta!",
        src: "../images/dinner/spaghetti.jpg",
      },
    ],
  },
];

function btnFunction() {
  let text = `Thank you for your patronage!\nSee you next time`;
  return alert(text);
}

const [{ breakfast }, { lunch }, { dinner }] = data;
let foodItems = [...breakfast, ...lunch, ...dinner];

addChildNodes(foodItems);

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function addChildNodes(foodItems) {
  const container = document.querySelector("#grid-container");
  removeAllChildNodes(container);

  for (let i = 0; i < foodItems.length; i++) {
    console.log(foodItems.length);
    console.log("foodItems.length");

    let foodItem = document.createElement("div");
    foodItem.style.width = "220px";
    foodItem.style.height = "300px";
    foodItem.style.padding = "10px";
    foodItem.style.margin = "10px";
    foodItem.style.backgroundColor = "#fff";
    foodItem.style.border = "solid 1px #ccc";

    let column = document.createElement("div");
    column.style.width = "100%";

    let btn = document.createElement("button");
    btn.setAttribute("type", "submit");
    btn.innerHTML = "Order";
    btn.addEventListener("click", btnFunction);
    btn.style.backgroundColor = "#685757";
    btn.style.padding = "10px";
    btn.style.border = "solid 1px #f6aeae";
    btn.style.borderRadius = "3px";
    btn.style.color = "#ffffff";
    btn.style.fontWeight = "normal";
    btn.style.fontSize = "large";

    let foodImg = document.createElement("img");
    console.log(foodImg);
    foodImg.setAttribute("src", foodItems[i].src);
    foodImg.style.height = "50%";
    foodImg.style.width = "100%";

    let div = document.createElement("div");
    div.style.width = "50%";
    div.style.display = "inline";

    let foodTitle = document.createElement("div");
    foodTitle.innerText = foodItems[i].title;
    foodTitle.style.fontWeight = "bold";
    foodTitle.style.textAlign = "left";
    foodTitle.style.display = "inline";

    let foodPrice = document.createElement("div");
    foodPrice.innerText = "$" + foodItems[i].price;
    foodPrice.style.float = "right";
    foodPrice.style.display = "inline";

    let foodDesc = document.createElement("p");
    foodDesc.innerText = foodItems[i].desc;

    div.appendChild(foodTitle);
    div.appendChild(foodPrice);

    column.appendChild(div);

    foodItem.appendChild(foodImg);
    foodItem.appendChild(column);
    foodItem.appendChild(foodDesc);
    foodItem.appendChild(btn);

    document.getElementById("grid-container").appendChild(foodItem);
    document.getElementById("grid-container").appendChild(foodItem);
    document.getElementById("grid-container").appendChild(foodItem);
    document.getElementById("grid-container").appendChild(foodItem);
  }
}

function handleSelectChange(event) {
  var selectElement = event.target;
  var value = selectElement.value;

  if (value.toLowerCase() === "all") {
    const [{ breakfast }, { lunch }, { dinner }] = data;
    let foodItems = [...breakfast, ...lunch, ...dinner];
    addChildNodes(foodItems);
  }

  if (value.toLowerCase() === "breakfast") {
    const container = document.querySelector("#grid-container");
    removeAllChildNodes(container);

    const [{ breakfast }, { lunch }, { dinner }] = data;
    let foodItems = [...breakfast];
    addChildNodes(foodItems);
  }

  if (value.toLowerCase() === "lunch") {
    const container = document.querySelector("#grid-container");
    removeAllChildNodes(container);

    const [{ breakfast }, { lunch }, { dinner }] = data;
    let foodItems = [...lunch];
    addChildNodes(foodItems);
  }

  if (value.toLowerCase() === "dinner") {
    const container = document.querySelector("#grid-container");
    removeAllChildNodes(container);

    const [{ breakfast }, { lunch }, { dinner }] = data;
    let foodItems = [...dinner];
    addChildNodes(foodItems);
  }
}
