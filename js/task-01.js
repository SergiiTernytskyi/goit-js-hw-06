const listCategoriesRef = document.querySelector('#categories');
const listItemsRef = document.querySelectorAll('.item');

const categoriesNumber = listCategoriesRef.children.length;
console.log(`Number of categories: ${categoriesNumber}`);

listItemsRef.forEach(element => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
