const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listItem = document.querySelector('ul');
  ingredients.forEach(elems => {
    const listElem = document.createElement('li');
    listElem.classList.add("item");
    listElem.textContent = `${elems}`;
    listItem.append(listElem);
  });
  console.log(listItem);
