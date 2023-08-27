import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow("Let's start calculation.");
    await sleep();
    rainbowTitle.stop();
    console.log(chalk.bgCyanBright(`
    
 _____________________
 |  _________________  |
 | | JO           0. | |
 | |_________________| |
 |  ___ ___ ___   ___  |
 | | 7 | 8 | 9 | | + | |
 | |___|___|___| |___| |
 | | 4 | 5 | 6 | | - | |
 | |___|___|___| |___| |
 | | 1 | 2 | 3 | | x | |
 | |___|___|___| |___| |
 | | . | 0 | = | | / | |
 | |___|___|___| |___| |
 |_____________________|`));
}
await welcome();
async function askQuestion() {
    const answers = await inquirer
        .prompt([
        /* Pass your questions in here */
        {
            type: "list",
            name: "operator",
            message: "Which operation do you want to perform?",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter number1 :"
        },
        {
            type: "number",
            name: "num2",
            message: "Enter number2:"
        }
    ]);
    if (answers.operator === "Addition") {
        console.log(chalk.greenBright(answers.num1 + answers.num2));
    }
    else if (answers.operator === 'Subtraction') {
        console.log(chalk.redBright(answers.num1 - answers.num2));
    }
    else if (answers.operator === 'Multiplication') {
        console.log(chalk.bgGray(answers.num1 * answers.num2));
    }
    else {
        console.log(chalk.yellowBright(answers.num1 / answers.num2));
    }
}
async function startAgain() {
    do {
        await askQuestion();
        var again = await inquirer
            .prompt({
            type: "input",
            name: "restart",
            message: "Do you want to continue? y or n: "
        });
    } while (again.restart == 'y' ||
        again.restart == 'Yes' ||
        again.restart == 'YES' ||
        again.restart == 'yes' ||
        again.restart == 'Y');
}
startAgain();
