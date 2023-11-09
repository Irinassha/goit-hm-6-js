const listItem = document.querySelector("ul");
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const listImg = images
  .map(
    (image) =>
      `<li><img class='img-elem' src = "${image.url}" alt = "${image.alt}"></li> `
  )
  .join("");

listItem.insertAdjacentHTML("beforeend", listImg);
console.log(listItem);

// const listItem = document.querySelector("ul");

// const galeryImages = (pictureImage) => {
//   const { url, alt } = pictureImage;

//   const itemElem = document.createElement("li");
//   itemElem.classList.add("item-elem", "js-item-elem");

//   const itemLink = document.createElement("a");
//   itemLink.href = "#";
//   itemLink.classList.add("js-link-elem");
//   itemElem.append(itemLink);

//   const itemImg = document.createElement("img");
//   itemImg.classList.add("img-elem", "js-img-elem");
//   itemImg.src = url;
//   itemImg.alt = alt;
//   itemLink.append(itemImg);

//   return itemElem;
// };

// const galeryImagesCard = images.map(pictureImage => {
//   return galeryImages(pictureImage);
// });

// listItem.append(...galeryImagesCard);

// console.log(listItem);
