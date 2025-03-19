const categoriesList = document.querySelectorAll("#categories > li");
console.log(`У списку ${categoriesList.length} категорії.`);

categoriesList.forEach(category => {
    const title = category.querySelector("li").textContent;
    const itemsCount = category.querySelectorAll("ul li").length;
    console.log(`Категорія: ${title}`);
    console.log(`Кількість елементів: ${itemsCount}`);
});
