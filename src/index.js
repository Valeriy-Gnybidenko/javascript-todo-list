import './template.html';
import './assets/styles/index.scss';

const input = document.querySelector('.todo-list__input');
const inputBtn = document.querySelector('.todo-list__btn');
const itemsList = document.querySelector('.todo-list__items-list');
const checkboxes = document.querySelectorAll('.todo-list__checkbox');
const text = document.querySelectorAll('.todo-list__text');
const removeAllBtn = document.querySelector('.todo-list__remove-btn');
let numberId = 0;

const addItem = () => {
  // let inputValue;
  // const onInput = (e) => {
  //   inputValue = e.target.value;
  // };

  // input.addEventListener('input', onInput);

  numberId++;
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
<p class="todo-list__text">New list item</p>`;
  newItem.classList.add('todo-list__item');
  newItem.innerHTML = newItemInfo;
  itemsList.append(newItem);
};

const removeAllItems = () => {
  const items = itemsList.querySelectorAll('.todo-list__item');

  items.forEach((item) => {
    item.remove();
  });
};

removeAllBtn.addEventListener('click', removeAllItems);
inputBtn.addEventListener('click', addItem);
