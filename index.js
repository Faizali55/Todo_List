#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let condition = true;
console.log(chalk.magentaBright.bold("\n\t<<<<< Wellcome To CodeWithFaiz Todo-List >>>>>\n"));
let main = async () => {
    while (condition) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select An Option Which You Want To Do:",
                choices: [
                    "Add Task",
                    "Update Task",
                    "View Task",
                    "Delete Task",
                    "Exit",
                ],
            },
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Update Task") {
            await updateTask();
        }
        else if (option.choice === "View Task") {
            await viewTask();
        }
        else if (option.choice === "Delete Task") {
            await DeleteTask();
        }
        else if (option.choice === "Exit") {
            condition = false;
        }
    }
};
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter Your Task:",
        },
    ]);
    todoList.push(newTask.task);
    console.log(chalk.green(`\n${newTask.task} This Task Has Been Addded.\n`));
};
let viewTask = async () => {
    console.log(chalk.magenta("\nYour Todo-List Task:\n"));
    todoList.forEach((task, index) => {
        console.log(chalk.blueBright(`${index + 1} ${task}`));
    });
    console.log("\n");
};
let DeleteTask = async () => {
    await viewTask();
    let deleteTaskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter The 'index no' Which You Want To Delete:",
        },
    ]);
    let deletedTask = todoList.splice(deleteTaskIndex.index - 1, 1);
    console.log(chalk.redBright(`\n${deletedTask}, This Task Has Been Deleted.\n`));
};
let updateTask = async () => {
    await viewTask();
    let updateTaskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter The 'index no' Which Do You want to Update:",
        },
        {
            name: "new_task",
            type: "input",
            message: "Now Enter The New Task:",
        },
    ]);
    todoList[updateTaskIndex.index - 1] = updateTaskIndex.new_task;
    console.log(chalk.green(`\n${updateTaskIndex.index}, This Task Has Been Updated.\n`));
};
main();
