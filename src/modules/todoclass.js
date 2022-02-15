import deleteIcon from './delete.png';

const inputdesc = document.getElementById('input');
const ul = document.getElementById('ul-list');
export default class toDoList {
  constructor(description, index, completed = false) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  displaytdlist() {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    if (ul.querySelectorAll('li')) {
      Array.from(ul.querySelectorAll('li')).forEach((task) => {
        ul.removeChild(task);
      });
    }
this.index = 0;
    this.tasks.forEach((task) => {
      const li = document.createElement('li');
      li.className = 'task';
      this.index += 1;
      task.index = this.index;
      li.setAttribute('id', `${this.index}`);
      const input = document.createElement('input');
      input.setAttribute('type', 'checkbox');
      input.className = 'checkbox';
      const p = document.createElement('p');
      p.className = 'description';
      p.innerHTML = task.description;
      const delIcon = new Image();
      delIcon.src = deleteIcon;
      delIcon.setAttribute('id', 'deleteTask');
      delIcon.classList = 'deleteTask';
      delIcon.setAttribute('alt', 'delete-icon');
      delIcon.addEventListener('click', () => {
        this.removeTask(task.index);
      });
      li.appendChild(input);
      li.appendChild(p);
      li.appendChild(delIcon);
      ul.appendChild(li);
    });
  }

  addTask() {
    this.tasks.push(new toDoList(this.description = inputdesc.value));
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.displaytdlist();
  }

  removeTask(n) {
    this.tasks.forEach((e, i, lib) => {
      if (e.index === n) {
        lib.splice(i, 1);
      }
    });
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.displaytdlist();
  }
}






