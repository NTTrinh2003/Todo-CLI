const fs = require('fs');

function mark_done(id) {
    const todoList = JSON.parse(fs.readFileSync('./todo-list.json', 'utf-8'));
    const task = todoList.todoList.find(task => task.id === id);
    if (task) {
        task.completion = 2;
    }
    fs.writeFileSync('./todo-list.json', JSON.stringify(todoList, null, 2));
}

function mark_in_progress(id) {
    const todoList = JSON.parse(fs.readFileSync('./todo-list.json', 'utf-8'));
    const task = todoList.todoList.find(task => task.id === id);
    if (task) {
        task.completion = 1;
    }
    fs.writeFileSync('./todo-list.json', JSON.stringify(todoList, null, 2));
}

module.exports = {
    mark_done,
    mark_in_progress
}