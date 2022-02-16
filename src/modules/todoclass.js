import deleteIcon from './delete.png';

const inputdesc = document.getElementById('input');
const ul = document.getElementById('ul-list');
export default class ToDoList {
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
      // Create li tag
      const li = document.createElement('li');
      li.className = 'task';
      this.index += 1;
      task.index = this.index;
      li.setAttribute('id', `${this.index}`);

      // Create Checkbox
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.className = 'checkbox';
      checkbox.addEventListener('change', () => {
        this.completeTask(checkbox.parentElement);
      });
      if (task.completed === true) {
        checkbox.setAttribute('checked', true);
      }

      // Create Task Description
      const inputText = document.createElement('input');
      inputText.setAttribute('type', 'text');
      inputText.className = 'description';
      inputText.value = task.description;
      inputText.addEventListener('focus', () => {
        li.classList.toggle('description-focus');
      });
      inputText.addEventListener('blur', () => {
        li.classList.toggle('description-focus');
      });
      inputText.addEventListener('change', () => {
        this.modifyTask(inputText);
      });
      if (task.completed === true) {
        inputText.classList.add('completeTask');
      }

      // Create Delete Button
      const delIcon = new Image();
      delIcon.src = deleteIcon;
      delIcon.setAttribute('id', 'deleteTask');
      delIcon.classList = 'deleteTask';
      delIcon.setAttribute('alt', 'delete-icon');
      delIcon.addEventListener('click', () => {
        this.removeTask(task.index);
      });

      // Append everything
      li.appendChild(checkbox);
      li.appendChild(inputText);
      li.appendChild(delIcon);
      ul.appendChild(li);
    });
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  addTask() {
    this.tasks.push(new ToDoList(this.description = inputdesc.value));
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.displaytdlist();
    inputdesc.value = '';
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

  modifyTask(taskInput) {
    const taskChanged = taskInput.parentElement;
    const taskList = taskChanged.parentElement.children;

    for (let i = 0; i < taskList.length; i += 1) {
      if (taskList[i] === taskChanged) {
        this.tasks[i].description = taskInput.value;
      }
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }

  completeTask(task) {
    const taskList = task.parentElement.children;

    for (let i = 0; i < taskList.length; i += 1) {
      if (taskList[i] === task) {
        if (this.tasks[i].completed === false) {
          this.tasks[i].completed = true;
        } else {
          this.tasks[i].completed = false;
        }
      }
    }
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.displaytdlist();
  }

  delCompletedTasks() {
    const array = [];
    for (let i = 0; i < this.tasks.length; i += 1) {
      if (this.tasks[i].completed === false) {
        array.push(this.tasks[i]);
      }
    }
    localStorage.setItem('tasks', JSON.stringify(array));
    this.displaytdlist();
  }
}