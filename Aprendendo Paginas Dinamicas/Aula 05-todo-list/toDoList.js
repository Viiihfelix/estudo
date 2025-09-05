const button = document.querySelector('button');

button.addEventListener('click', () => {
  const tasksList = document.querySelector('.tasksContainer');
  const input = document.querySelector('input');

  if (input.value.trim() === '') return;

  const newTask = document.createElement('li');

  const taskText = document.createElement('span');
  taskText.innerText = input.value;
  taskText.className = 'span';
  taskText.style.marginLeft = '10px';

  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.className = 'checkBox';
  checkBox.style.marginLeft = '10px';

  const removeButton = document.createElement('button');
  removeButton.innerText = '🗑️';
  removeButton.className = 'deleteButton';
  removeButton.style.backgroundColor = '#ffffff99';
  removeButton.style.border = 'none';
  removeButton.style.marginLeft = '10px';

  checkBox.addEventListener('change', () => {
    taskText.classList.toggle('done', checkBox.checked);
  })

  removeButton.addEventListener('click', () => {
    newTask.remove();
  })

  newTask.appendChild(checkBox);
  newTask.appendChild(taskText);
  newTask.appendChild(removeButton);

  tasksList.appendChild(newTask)
  input.value = '';
});