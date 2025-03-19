const textInput = document.getElementById("textInput");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
    button.textContent = textInput.value;
});

const image = document.getElementById("image");
image.src = "new-image.jpg";

const link = document.getElementById("link");
const linkImage = document.getElementById("linkImage");
link.href = "https://new-example.com";
linkImage.alt = "Нове зображення посилання";

const list = document.getElementById("list");
list.firstElementChild.textContent = "Новий текст першого елемента";