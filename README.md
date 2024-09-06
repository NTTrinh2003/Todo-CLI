# Todo-CLI
This is a self-study project.
Project URL: https://roadmap.sh/projects/task-tracker  
The project is a CLI Todo List application using Javascript, NodeJS and JSON as database.

Usage:
 - Base command: node index \<command\> \[arguments\]
 - \<command\>:
    - list: list all todo tasks or specific tasks
    - add: add new todo task and set it as Not In Progress
    - delete: delete specific todo task
    - mark-done: mark specific task's status is done
    - mark-in-progress: mark specific task's status is done
 - \[argument\]:
    - list:
      - todo: Not In Progress tasks
      - in-progress: In Progress tasks
      - done: Finished tasks
    - add:
      - \<title\>: the title of the todo task, cover with ""
    - update:
      - \<id\>: the id of the task
      - \<title\>: the title of the todo task, cover with ""
    - delete, mark-done, mark-in-progress:
      - \<id\>: the id of the task

This repository may not be the best practice to fulfill the application's purpose,  
so if you have a better idea to do it, and if you have time, leave a comment, I am willing to learn. 

Thank you for visiting.
