// const imageContainerE1 = document.querySelector(".image-container");
// const btnE1 = document.querySelector(".btn");

// btnE1.addEventListener("click", () => {
//     let imageNum = 10;
//     addNewImages();
// });

// function addNewImages() {
//     for (let index = 0; index < imageNum; index++) {
//         const newImgE1 = document.createElement("img");
//         newImgE1.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000
//         )}`;
//         imageContainerE1.appendChild(newImgE1);
//     }
// }




const imageContainerEl = document.querySelector(".image-container");

const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
  imageNum = 10;
  addNewImages();
});

function addNewImages() {
  for (let index = 0; index < imageNum; index++) {
    const newImgEl = document.createElement("img");
    newImgEl.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 2000
    )}`;
    imageContainerEl.appendChild(newImgEl);
  }
}