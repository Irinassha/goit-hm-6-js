const listItem = [...document.querySelectorAll("ul")];
const listElem = listItem.length - 1;
console.log(`Number of categories: ${listElem}`);

const items = document.querySelectorAll('.item');
Array.prototype.forEach.call(items, (element) => {
    const title = element.querySelector('h2').innerHTML;
    const itemsLength = element.querySelectorAll('li').length;
    console.log(`Category:: ${title}
    Elements: ${itemsLength}`);
});


