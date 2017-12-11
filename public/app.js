var app = function() {

  const ul = document.createElement("ul");
  ul.classList.add("cat");

  const liName = document.createElement("li");
  liName.innerText = "Name: Otto";

  const liFood = document.createElement("li");
  liFood.innerText = "Favourite food: Pete's hand";

  const liImage = document.createElement("li")

  const image = document.createElement("img")
  image.src = "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb"
  image.width = 500;

  // liImage.appendChild(image);
  // liFood.appendChild(liImage);
  // liName.appendChild(liFood);
  // ul.appendChild(liName);

  const cats = document.querySelector("#cats");
  // cats.appendChild(ul);

  const createImage = function(image) {
    let image = document.createElement("img")

  }

  const appendElements = function(cats, image, liImage, liFood, liName, ul) {
    liImage.appendChild(image);
    liFood.appendChild(liImage);
    liName.appendChild(liFood);
    ul.appendChild(liName);
    cats.appendChild(ul);
  }
};

document.addEventListener('DOMContentLoaded', app);
