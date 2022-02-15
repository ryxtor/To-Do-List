const toDoList = [
  {
    description: 'Create display function',
    completed: false,
    index: 1,
  },
  {
    description: 'Style the page',
    completed: false,
    index: 2,
  },
  {
    description: 'Fix Linters',
    completed: false,
    index: 3,
  },
  {
    description: 'Complete To Do list',
    completed: false,
    index: 4,
  },
];

const ul = document.getElementById('ul-list');

const displaytdlist = () => {
  toDoList.forEach((task) => {
    const li = document.createElement('li');
    li.className = 'task';
    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.className = 'checkbox';
    li.setAttribute('id', `${task.index}`);
    const p = document.createElement('p');
    p.className = 'description';
    p.innerHTML = task.description;
    li.appendChild(input);
    li.appendChild(p);
    ul.appendChild(li);
  });
};

export default displaytdlist;