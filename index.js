#! /usr/bin/env node
import inquirer from "inquirer";
let todos = ["Task 1", "Task 2"];
async function creatTodo(todos) {
    do {
        let operation = await inquirer.prompt([
            {
                type: "list",
                name: "operator",
                message: "Choose what you want to do",
                choices: ["Add a Task", "View Tasks", "Update a Task", "Delete a Task", "Exit Task Tracker"],
            },
        ]);
        if (operation.operator === "Add a Task") {
            let addTask = await inquirer.prompt({
                type: "input",
                name: "add",
                message: "Write down your task below",
            });
            todos.push(addTask.add);
            console.log(`Tasks: ${[todos]}\n`);
        }
        else if (operation.operator === "View Tasks") {
            console.log(`Tasks: ${[todos]}\n`);
        }
        else if (operation.operator === "Update a Task") {
            let updateTask = await inquirer.prompt([
                {
                    type: "list",
                    name: "update",
                    message: "Which task you want to update",
                    choices: todos,
                },
            ]);
            let writeUpdate = await inquirer.prompt({
                type: "input",
                name: "writeUpdate",
                message: `Update ${updateTask.update}`,
            });
            let newTodo = todos.filter(val => val !== updateTask.update);
            todos = [...newTodo, updateTask.writeUpdate];
        }
        else if (operation.operator === "Delete a Task") {
            let deleteTask = await inquirer.prompt({
                type: "list",
                name: "delete",
                message: "Select the task you want to delete",
                choices: todos.map(item => item)
            });
            let newTodo = todos.filter(val => val !== deleteTask.delete);
            todos = [...newTodo];
            console.log(`Tasks: ${[todos]}\n`);
        }
        else if (operation.operator === "Exit Task Tracker") {
            console.log("Exitting Tracker...");
            return;
        }
    } while (true);
}
creatTodo(todos);
