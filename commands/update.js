const fs = require('fs');

function update(id, title) {
    const todoList = JSON.parse(fs.readFileSync('./todo-list.json', 'utf-8'));
    const task = todoList.todoList.find(task => task.id === id);
    if (task) {
        task.title = title;
    }
    fs.writeFileSync('./todo-list.json', JSON.stringify(todoList, null, 2));
}

module.exports = update;