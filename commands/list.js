const fs = require('fs');
const chalk = require('chalk');

function list() {
    const todoList = JSON.parse(fs.readFileSync('./todo-list.json', 'utf-8')).todoList;
    if (todoList.length === 0) {
        console.log(chalk.red.bold('No tasks found'));
    } else {
        console.log(chalk.blue.bold('All to do tasks (Green: Done, Yellow: In Progress, Red: Not Started)'));
        todoList.forEach(task => {
            if (task.completion === 2) {
                console.log(chalk.white.bold(task.id, '.'), chalk.green.bold(task.title));
            } else if (task.completion === 1) {
                console.log(chalk.white.bold(task.id, '.'), chalk.yellowBright.bold(task.title));
            } else {
                console.log(chalk.white.bold(task.id, '.'), chalk.red.bold(task.title));
            }
        });
    }
}

function listByCompletion(status) {
    const todoList = JSON.parse(fs.readFileSync('./todo-list.json', 'utf-8')).todoList;
    if (status === 'todo') {
        console.log('Not Started Tasks');
        todoList.forEach(task => {
            if (task.completion === 0) {
                console.log(chalk.white.bold(task.id, '.'), chalk.red.bold(task.title));
            }
        });
    } else if (status === 'in-progress') {
        console.log('In Progress Tasks');
        todoList.forEach(task => {
            if (task.completion === 1) {
                console.log(chalk.white.bold(task.id, '.'), chalk.yellowBright.bold(task.title));
            }
        });
    } else if (status === 'done') {
        console.log('Done Tasks');
        todoList.forEach(task => {
            if (task.completion === 2) {
                console.log(chalk.white.bold(task.id, '.'), chalk.green.bold(task.title));
            }
        });
    }
}

module.exports = { list, listByCompletion };
