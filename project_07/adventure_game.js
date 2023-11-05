import inquirer from "inquirer";
import chalk from "chalk";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Enemy {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt({
    type: 'input',
    name: 'name',
    message: 'Please enter your Name: '
});
let opponent = await inquirer.prompt({
    type: 'list',
    name: 'select',
    message: ` ${player.name}, Please select Your Opponent: `,
    choices: ['Skeleton', 'Assassin', 'Zombie']
});
// console.log(opponent.select);
let p1 = new Player(player.name);
let e1 = new Enemy(opponent.select);

do {if (opponent.select === 'Skeleton' || 'Assassin' || 'Zombie') {
    // console.log(`${chalk.green.bold(p1.name.toUpperCase())} vs ${chalk.bold.red(e1.name.toUpperCase())}`);
    let ask = await inquirer.prompt({
        type: 'list',
        name: 'opt',
        message: 'Please select your move',
        choices: ['Attack', 'Drink Portion', 'Run for your life...']
    });
    if (ask.opt === 'Attack' ) {
        let num = Math.floor(Math.random() * 2);
        if (num > 0) {
            p1.fuelDecrease();
            console.log(chalk.red.bold(`${p1.name} fuel is ${p1.fuel}`));
            console.log(chalk.bold.green(`${e1.name} fuel is ${e1.fuel}`));
            if (p1.fuel <= 0 ){
                console.log(chalk.bold.red.italic('You lose. Better luck next time.'));
                process.exit()
            }
        }
        if (num <= 0) {
            e1.fuelDecrease();
            console.log(chalk.red.bold(`${e1.name} fuel is ${e1.fuel}`));
            console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
            if (e1.fuel <= 0 ){
                console.log(chalk.bold.green.italic('You Won.'));
                process.exit()
            }
        }
    }
    if (ask.opt === 'Drink Portion') {
        p1.fuelIncrease();
        console.log(chalk.bold.italic.green('You drink health Portion.Your fuel is is ' + p1.fuel + '.'))
    }
    if (ask.opt === 'Run for your life...') {
        console.log(chalk.bold.red.italic('You lose. Better luck next time.'));
    }
 }}


while(true)
 
