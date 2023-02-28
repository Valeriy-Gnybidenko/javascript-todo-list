import './template.html';
import './assets/styles/index.scss';

const input = document.querySelector('.todo-list__input');
const inputBtn = document.querySelector('.todo-list__btn');
const itemsList = document.querySelector('.todo-list__items-list');
const removeAllBtn = document.querySelector('.todo-list__remove-btn');
const count = document.querySelector('.todo-list__count');
let numberId = 0;
let counter = 0;
let myItems = [];

const createElement = (text) => {
  let newItem = document.createElement('li');
  let newItemInfo = `<div class="todo-list__checkbox-wrapper">
  <input
    id="todo-list__checkbox${numberId}"
    type="checkbox"
    class="todo-list__checkbox" />
  <label
    class="todo-list__checkbox-label"
    for="todo-list__checkbox${numberId}">
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.66666 8.66667L5.99999 12L13.3333 4.66667"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round" />
    </svg>
  </label>
</div>
<p class="todo-list__text">${text}</p>`;
  newItem.classList.add('todo-list__item');
  newItem.innerHTML = newItemInfo;
  itemsList.append(newItem);
  return newItem;
};

const checkboxHandler = (element) => {
  const checkbox = element.querySelector('.todo-list__checkbox');
  const itemText = element.querySelector('.todo-list__text');
  checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
      counter++;
      createSelectedText(counter);
      itemText.style.textDecoration = 'line-through';
      itemText.style.color = '#b8b8b8';
    } else {
      counter--;
      createSelectedText(counter);
      itemText.style.textDecoration = 'none';
      itemText.style.color = '#001747';
    }
  });
};

const addItem = () => {
  let text = '';
  if (!input.value.trim().length) {
    return;
  }
  text = input.value;
  const newItem = createElement(text);
  input.value = '';
  numberId++;
  checkboxHandler(newItem);

  myItems.push(newItem);
};

const removeAllItems = () => {
  myItems.forEach((item) => {
    item.remove();
  });
  counter = 0;
  createSelectedText(counter);
};

const createSelectedText = (number) => {
  count.innerHTML = number;
};

removeAllBtn.addEventListener('click', removeAllItems);
inputBtn.addEventListener('click', addItem);
