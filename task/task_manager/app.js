const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tasks = [];

function addTask(title, description) {
  tasks.push({ title, description });
  console.log('Task added successfully!');
}

function listTasks() {
  if (tasks.length === 0) {
    console.log('No tasks found.');
  } else {
    console.log('Tasks:');
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task.title} - ${task.description}`);
    });
  }
}

function updateTask(index, title, description) {
  if (index >= 0 && index < tasks.length) {
    tasks[index] = { title, description };
    console.log('Task updated successfully!');
  } else {
    console.log('Invalid task index.');
  }
}

function removeTask(index) {
  if (index >= 0 && index < tasks.length) {
    tasks.splice(index, 1);
    console.log('Task removed successfully!');
  } else {
    console.log('Invalid task index.');
  }
}

function mainMenu() {
  console.log('\nMain Menu:');
  console.log('1. Add Task');
  console.log('2. List Tasks');
  console.log('3. Update Task');
  console.log('4. Remove Task');
  console.log('5. Exit');

  rl.question('Enter option: ', (option) => {
    if (option === '1') {
      rl.question('Enter task title: ', (title) => {
        rl.question('Enter task description: ', (description) => {
          addTask(title, description);
          mainMenu();
        });
      });
    } else if (option === '2') {
      listTasks();
      mainMenu();
    } else if (option === '3') {
      rl.question('Enter task index to update: ', (index) => {
        rl.question('Enter updated task title: ', (title) => {
          rl.question('Enter updated task description: ', (description) => {
            updateTask(index - 1, title, description);
            mainMenu();
          });
        });
      });
    } else if (option === '4') {
      rl.question('Enter task index to remove: ', (index) => {
        removeTask(index - 1);
        mainMenu();
      });
    } else if (option === '5') {
      console.log('Exiting...');
      rl.close();
    } else {
      console.log('Invalid option.');
      mainMenu();
    }
  });
}

mainMenu();
