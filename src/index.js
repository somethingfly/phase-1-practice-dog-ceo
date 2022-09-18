// console.log('%c HI', 'color: firebrick')

// can change the cursor when hovering over li to, say, hand icon if desired
// may be useful so user knows that click functionality exists

// for selecter https://stackoverflow.com/questions/24875414/addeventlistener-change-and-option-selection

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener('DOMContentLoaded', function() {
  fetchDogImages();
  fetchDogBreeds();
});

function fetchDogImages() {
  fetch(imgUrl)
    .then((resp) => resp.json())
    .then((dogImages) => renderDogImages(dogImages));
}

function renderDogImages(dogImages) {
  const dogImageContainer = document.getElementById("dog-image-container");
  dogImages.message.forEach(dogUrl => {
    const img = document.createElement('img');
    img.src = dogUrl;
    dogImageContainer.appendChild(img);
  }); 
}

function fetchDogBreeds() {
    fetch(breedUrl)
      .then((resp) => resp.json())
      .then((dogBreeds) => renderDogBreeds(dogBreeds));
}
  
function renderDogBreeds(dogBreeds) {
  const dogBreedContainer = document.getElementById("dog-breeds");
  const inputForm = document.getElementById('breed-dropdown');
  for (var dogBreed in dogBreeds.message) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(dogBreed));
    li.id = dogBreed;
    li.classList.add(dogBreed[0]);
    li.addEventListener('click', function () {
        this.style.color = 'red';
    });
    dogBreedContainer.appendChild(li);
  }; 
  inputForm.addEventListener("change", function() {
    for (var dogBreed in dogBreeds.message) {
      const dogBreedLi = document.getElementById(dogBreed);
      if (dogBreedLi.classList.contains(inputForm.value)) {
        dogBreedLi.style.display = "block";
      } else {
        dogBreedLi.style.display = "none";
      };
    };
  });  
}


