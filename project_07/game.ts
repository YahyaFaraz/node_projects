import inquirer from "inquirer"
import {Random} from 'random-js'
const rand = new Random()
import chalk from "chalk";
import readlineSync from "readline-sync";


class Main {
          static async main(){

          const enemies = ['Skeleton','Zombie','Warrior','Assassin']
          for (let i = 0; i < enemies.length; i++){
                    let enemy = enemies[i]
          }
          let maxEnemyHealth = 75
          let health = 100;
          let attackDamage = 25;
          let maxEnemyDamage =  40;
          let numHealthPotions = 3;
          let healthPotionHealAmount = 30;
          let healthPotionDropChance = 50
          let running = true
          console.log('Welcome to the \t -----------Dungeon-----------')
          while (running){
                    console.log("-------------------------")
                    let enemyHealth = rand.integer(0,maxEnemyHealth)
                    let enemy = enemies[rand.integer(0, enemies.length)]
                    while (enemyHealth > 0){
                              console.log("\tYour HP: " + health)

                              console.log("\t" + enemy + "'s HP: " + enemyHealth);
                              console.log("\n\tWhat would you like to do?");
                              console.log("\t1. Attack")
                              console.log("\t2. Drink health potion")
                              console.log("\t3. Run!")
                              const input =  readlineSync.question('Enter your choice: ')
                              if (input === '1'){
                                        const damageDealt = rand.integer(0, attackDamage);
                                        const damageTaken = rand.integer(0, maxEnemyDamage)
                                        enemyHealth -= damageDealt
                                        health -= damageTaken
                                        console.log('\t> You strike the ' + enemy + ' for' + damageDealt + ' damage.' )
                                        console.log('\t> You receive ' + damageTaken + ' in retaliation.' )
                                        if (health < 1){
                                                  console.log("\t> You have taken too much damage and are too weak to go on. ")
                                                  break
                                        }
                              }
                              else if (input === '2'){
                                        if (numHealthPotions > 0){
                                                  health += healthPotionHealAmount;
                                                  numHealthPotions--;
                                                  console.log("\t> You drink a health potion, healing yourself " + healthPotionHealAmount  )
                                                  console.log("\t> You now have " + health + "HP.")
                                                  console.log("\t> You have " + numHealthPotions +' health potions remaining.')
                                        }
                                        else {
                                                  console.log("\t> You have no potions left. Defeat an enemy to get one.")
                                        }
                              }
                              else if (input === '3'){
                                        console.log('\tYou run away from the ' + enemy + "!")
                                        break

                              }
                              if (health < 1){
                                        console.log("\t You limp out of the dungeon, weak from the battle.")
                                        break
                              }
                              console.log("-------------------")
                              if (enemyHealth < 1){
                              console.log(enemy + " was defeated! ")
                              }
                              console.log('You have ' + health + ' HP left. ')
                              if (rand.integer(0,100) < healthPotionDropChance){
                                        numHealthPotions++
                                        console.log("The " + enemy + " dropped a health potion.")
                                        console.log("You now have " + numHealthPotions)
                              }
                              console.log('--------------------')
                              let  user_decision =  await inquirer.prompt({
                                        type: 'list',
                                        name: 'decision',
                                        message: "What would you like to do now?: ",
                                        choices: ['Continue fighting' 
                                        , ' Exit Dungeon']
                              })
                              let  decision : string = user_decision.decision

                              
                              if (decision ===  'Continue fighting'){
                                        console.log('Continue your adventure')
                              }
                              else if (decision === 'Exit Dungeon'){
                                        console.log("You exit the Dungeon. Congratulations.")

                              }
                              else{
                                        console.log('Invalid choice')
                                        // function will be inserted
                              }
                              

                              console.log(chalk.black("###################"))
                              console.log(chalk.grey("Thanks for Playing."))
                              console.log(chalk.black('##################'))

                              }
                    }

          }

}

Main.main()