const fs = require('fs');

function delete_task(id) {
    const todoList = JSON.parse(fs.readFileSync('./todo-list.json', 'utf-8'));
    const task = todoList.todoList.find(task => task.id === id);
    if (task) {
        todoList.todoList = todoList.todoList.filter(task => task.id !== id);

        let curr = id;
        for (curr; curr < todoList.total - 1; curr++) {
            todoList.todoList[curr].id = curr;
        }
        todoList.total--;
    }
    fs.writeFileSync('./todo-list.json', JSON.stringify(todoList, null, 2));
}

module.exports = delete_task;