import ToDoList from './modules/todoclass.js';
import './style.css';
import enterIcon from './images/enter.png';

const createEnterIcon = () => {
  const formContainer = document.querySelector('.input-container');
  const enIcon = new Image();
  enIcon.src = enterIcon;
  enIcon.setAttribute('id', 'enterInput');
  enIcon.classList = 'enterInput';
  enIcon.setAttribute('alt', 'enter-icon');
  formContainer.appendChild(enIcon);
};

createEnterIcon();

const runClass = new ToDoList();
runClass.displaytdlist();
const btnTask = document.getElementById('enterInput');
btnTask.addEventListener('click', () => {
  runClass.addTask();
});
const enterTask = document.getElementById('input');
enterTask.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    runClass.addTask();
  }
});

const delCompletedbtn = document.getElementById('clear-btn');
delCompletedbtn.addEventListener('click', () => {
  runClass.delCompletedTasks();
});