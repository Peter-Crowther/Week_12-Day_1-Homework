var app = function() {
  addCat("Otto", "Pete's hand", "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb")
}

  // const ul = document.createElement("ul");
  // ul.classList.add("cat");

  // const liName = document.createElement("li");
  // liName.innerText = "Name: Otto";

  // const liFood = document.createElement("li");
  // liFood.innerText = "Favourite food: Pete's hand";

  // const liImage = document.createElement("li");

  // const image = document.createElement("img")
  // image.src = "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb"
  // image.width = 500;

  // liImage.appendChild(image);
  // liFood.appendChild(liImage);
  // liName.appendChild(liFood);
  // ul.appendChild(liName);

  // const cats = document.querySelector("#cats");
  // cats.appendChild(ul);


  const addCat = function(name, food, url) {
    let ul = createUl();
    let liName = createLiName(name);
    let liFood = createLiFood(food);
    let liImage = createliImage();
    let image = createliImage(url);
    let cats = document.querySelector("#cats");
    appendElements(cats, ul, liName, liFood, liImage, image)
  }

  const createUl = function() {
    let ul = document.createElement("ul");
    ul.classList.add("cat");
    return ul;
  }

  const createLiName = function(name) {
    let liName = document.createElement("li");
    liName.innerText = "Name: " + name;
    return liName;
  }

  const createLiFood = function(food) {
    let liFood = document.createElement("li");
    liFood.innerText = "Favourite food: " + food;
    return liFood;
  }

  const createliImage = function() {
    let liImage = document.createElement("li")
    return liImage;
  }

  const createImage = function(url) {
    let image = document.createElement("img");
    image.src = url;
    image.width = 500;
    return image;
  };

  const appendElements = function(cats, ul, liName, liFood, liImage, image) {
    liImage.appendChild(image);
    liFood.appendChild(liImage);
    liName.appendChild(liFood);
    ul.appendChild(liName);
    cats.appendChild(ul);
  }


// };

document.addEventListener('DOMContentLoaded', app);
