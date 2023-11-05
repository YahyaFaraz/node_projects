import inquirer from "inquirer"
import chalk from "chalk"

let conversion_rate = {
    "PKR": {
        "USD": 0.0033,
        "GBP": 0.0026,
        "AED": 0.0122,
        "PKR": 1
    },
    "USD": {
        "PKR": 300.65,
        "GBP": 0.7916,
        "AED": 3.6725,
        "USD": 1
    },
    "GBP": {
        "PKR": 387.06,
        "AED": 4.6361,
        "USD": 1.2624,
        "GBP": 1
    },
    "AED": {
        "PKR": 0.2524,
        "USD": 0.2723,
        'GBP': 0.2157,
        "AED": 1
    }
}


let questions: {
    From : "USD"|"GBP"|"AED"|"PKR" ,
    To: "USD"|"GBP"|"AED"|"PKR",
    Amount: number
} = await inquirer.prompt([
    {
        type: "list",
        name: "From",
        choices: ["USD","GBP","AED","PKR"],
        message: "Please select the currency you want to convert: "
    },
    {
        type: "list",
        name: "To",
        choices: ["USD","GBP","AED","PKR"],
        message: "Please select the currency you want to convert into: "

    },
    {
        type: "input",
        name: "Amount",
        message: "Please enter the conversion amount: "
    }

])

const {From, To, Amount} = questions;



if (From && To && Amount){
    let result = conversion_rate[From][To] * Amount
    console.log(chalk.blue(`The exchange rate of amount ${Amount} from ${From} to ${To} is ${result}. `))

}else {
    console.log(chalk.redBright('Please give a valid input.'))
}