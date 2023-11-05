import inquirer from "inquirer";
import chalk from "chalk";
async function Detail(user = 'YahyaFaraz', code = "7777") {
    console.log('Welcome');
    const bank_details = await inquirer.prompt([{
            type: "input",
            name: "user_id",
            message: "Please enter your User ID: "
        },
        {
            type: "input",
            name: "user_pin",
            message: "Please enter your PIN: "
        }]);
    if (bank_details.user_id === user && bank_details.user_pin === code) {
        console.log(chalk.blueBright('ATM Unlocked.'));
    }
    else {
        console.log(chalk.red('ATM Not Accessible. Your user_id or PIN is incorrect.'));
    }
}
Detail();
