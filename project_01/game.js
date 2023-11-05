import chalk from "chalk";
import inquirer from "inquirer";
async function num() {
    let a = Math.floor(Math.random() * 10);
    console.log(chalk.blueBright('You have 3 Tries'));
    let tries = 3;
    for (let i = 0; i < tries; i++) {
        let input = await inquirer.prompt({
            type: "input",
            name: "user_number",
            message: chalk.redBright('Please input a number: ')
        });
        let user_number = parseInt(input.user_number);
        if (user_number >= 10 || user_number <= 0 ){
            console.log("Invalid number.")
        }
        else if (user_number !== a) {
           console.log('Try again.')
        }
        else if (user_number === a) {
            console.log('Congratulations. You got it right.');
            break
        }
        if (i === tries - 1){
            console.log("Game over")
        }
     }
}
num();
