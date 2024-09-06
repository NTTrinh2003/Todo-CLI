const { program } = require('commander');
const { list, listByCompletion } = require('./commands/list');
const add = require('./commands/add');
const delete_task = require('./commands/delete');
const update = require('./commands/update');
const { mark_done, mark_in_progress } = require('./commands/mark');

program
    .command('list')
    addOption('<status>', 'status string', listByCompletion)
    .description('All to do tasks')
    .action(() => {
        list();
    });

program
    .command('add <title>')
    .description('Add a new task')
    .action(title => {
        add(title);
    });

program
    .command('delete <id>')
    .description('Delete a task by ID')
    .action(id => {
        delete_task(id);
    });

program
    .command('update <id> <title>')
    .description('Update a task by ID')
    .action((id, title) => {
        update(id, title);
    });

program
    .command('mark-done <id>')
    .description('Mark a task as done by ID')
    .action(id => {
        mark_done(id);
    });

program
    .command('mark-in-progress <id>')
    .description('Mark a task as in progress by ID')
    .action(id => {
        mark_in_progress(id);
    });

program.parse(process.argv);
