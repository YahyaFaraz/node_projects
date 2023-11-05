import inquirer from "inquirer"
import chalk from "chalk"




const answers : string[] = []

const correct_answers = ['108', 'Karakoram','Karakoram','Three', 'All of them']


console.log('-------------------MCQs(Mountain Knowledge)----------------------')
          let a = await inquirer.prompt({
          type: 'list',
          name: 'mcqA',
          message: "How many mountain ranges are present in Pakistan that are above 7000 meters?: ",
          choices: ['100','105','108']
})

answers.push(a.mcqA)
const first = a.mcqA

let b = await inquirer.prompt({
          type: 'list',
          name: "mcqB",
          message: "What range in Pakistan consists of highest peaks?: ",
          choices: ['Karakoram','Himalaya','HinduKush']

})
answers.push(b.mcqB)
const second = b.mcqB


let c = await inquirer.prompt({
          type: 'list',
          name: "mcqC",
          message: 'K2 is a part of which mountain range?: ',
          choices: ['HinduKush', 'Himalaya','Karakoram']
})
answers.push(c.mcqC)
const third = c.mcqC
let d = await inquirer.prompt({
          type: "list",
          name: "mcqD",
          message: "Himalayas covers how many provinces of Pakistan?: ",
          choices: ['Two','Three','Four']


})
answers.push(d.mcqD)
const forth = d.mcqD
let e = await inquirer.prompt({
          type: 'list',
          name: 'mcqE',
          message: 'Which mountain is located in Pakistan: ',
          choices: ['Hindukush','Nanga Parbat','K2', 'All of them']
                    
});

answers.push(e.mcqE)
const fifth = e.mcqE



console.log(chalk.overline('Quiz complete'))

 
let obtained_marks: number = 0;

for (let i = 0; i < answers.length;i++){
          if (answers[i] === correct_answers[i]){
                    obtained_marks += 1
          }
}

console.log(chalk.blueBright(`Marks Obtained: ${obtained_marks}`))




