const fs = require('fs');
const chalk = require('chalk');

function add(title) {
    const todoList = JSON.parse(fs.readFileSync('./todo-list.json', 'utf-8'));
    const newTask = {
        id: todoList.total + 1,
        title: title,
        completion: 0
    };
    todoList.todoList.push(newTask);
    todoList.total++;
    fs.writeFileSync('./todo-list.json', JSON.stringify(todoList, null, 2));
    console.log(chalk.green.bold('Task added successfully'));
}

module.exports = add;