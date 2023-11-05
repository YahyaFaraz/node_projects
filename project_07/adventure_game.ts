import inquirer  from "inquirer";
import chalk from "chalk";

class Player {
          name: string;
          fuel: number = 100;
          constructor(name:string){
                    this.name = name
          }
          fuelDecrease(){
                    let fuel = this.fuel - 25
                    this.fuel = fuel
          }
          fuelIncrease(){
                    this.fuel = 100
          }
}
class Enemy{
          name: string;
          fuel : number =  100
          constructor(name: string){
                    this.name = name
          }
          fuelDecrease(){
                    let fuel = this.fuel - 25
                    this.fuel = fuel
          }
}
let player = await inquirer.prompt({
          type: 'input',
          name : 'name',
          message: 'Please enter your Name: '
})


let opponent = await inquirer.prompt ({
          type : 'list',
          name: 'select',
          message: ` ${player.name}, Please select Your Opponent: `,
          choices: ['Skeleton', 'Assassin', 'Zombie']
})

console.log(opponent.select)

let p1 = new Player(player.name)
let e1 = new Enemy(opponent.select)

if (opponent.select === 'Skeleton'){
          console.log(`${chalk.green.bold(p1.name.toUpperCase())} vs ${chalk.bold.red(e1.name.toUpperCase())}`)
          let ask = await inquirer.prompt({
                    type: 'list',
                    name: 'opt',
                    message: 'Please select your move',
                    choices: ['Attack', 'Drink Portion', 'Run for your life...']
          });

          if(ask.opt === 'Attack'){
                    let num = Math.floor(Math.random() * 2)
                    if (num > 0){
                              p1.fuelDecrease()
                              console.log(chalk.red.bold(`${p1.name} fuel is ${p1.fuel}`))
                              console.log(chalk.bold.green(`${e1.name} fuel is ${e1.fuel}`))

                    }
                    if (num <= 0){
                              e1.fuelDecrease()
                              console.log(chalk.red.bold(`${e1.name} fuel is ${e1.fuel}`))
                              console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))


                    }
          }
                    if (ask.opt === 'Drink Portion'){
                              p1.fuelIncrease()

                    }
                    if (ask.opt === 'Run for your life...'){
                               console.log(chalk.bold.red.italic('You lose. Better luck next time.'))
                    }

}










