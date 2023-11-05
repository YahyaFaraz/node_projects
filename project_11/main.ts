import inquirer from "inquirer"
import {faker} from '@faker-js/faker' 
import chalk from "chalk"
 

class Customer{
          firstName: string;
          lastName: string;
          age: number;
          gender: string;
          mobNumber:  number
          accNumber:  number

          constructor(fName: string, lName: string, age: number,gender: string,mob: number,acc: number){
                    this.firstName = fName;
                    this.lastName = lName;
                    this.age = age;
                    this.gender = gender;
                    this.mobNumber = mob;
                    this.accNumber = acc

          }



}

interface BankAccount{
          accNumber:  number,
          balance: number

}

class Bank{
          customers: Customer[] = []
          accounts: BankAccount[] = []

          addCustomer(obj: Customer){
                    this.customers.push(obj)
          }
          addAccountNumber(obj:  BankAccount){
                    this.accounts.push(obj)
          }
          transaction(obj: BankAccount){
                    let newAccounts = this.accounts.filter(acc => acc.accNumber !== obj.accNumber)
                    this.accounts = [...newAccounts,obj]
          }
}


// let customer1 = new Customer('Yahya','Faraz',17,'male', 3242347969,2350012980)
let myBank = new Bank()
// myBank.addCustomer(customer1)


for(let i: number = 1;i<=3;i++){
          let fName = faker.person.firstName('male')
          let lName = faker.person.lastName()
          let num = parseInt(faker.phone.number())
          const cus = new Customer(fName, lName, 25 * i,'male',num, 1000 + i)
          // console.log(cus)
          myBank.addCustomer(cus)
          myBank.addAccountNumber({accNumber: cus.accNumber, balance: 100 * i})
          
}

//Bank functionality
async function bankService(myBank: Bank) {
          do {
          let service = await inquirer.prompt({
                    type: 'list',
                    name:'select',
                    choices: ['View Balance','Cash Withdrawal','Cash Deposit','Quit']
          })
          let selected = service.select
          if (selected === 'View Balance'){
                    console.log('View Balance')
                    let account_num = await inquirer.prompt({
                              type:'input',
                              name:'response',
                              message: 'Please enter your account number: '
                    }) 
                    let acc_number = parseInt(account_num.response,10)
                    let account_number: BankAccount|undefined = myBank.accounts.find(acc => acc.accNumber === acc_number)
                    if (!account_number){
                              console.log(chalk.red.bold.italic("Invalid Account Number.")) 
                    } 
                    if (account_number){
                              let name = myBank.customers.find((item) => item.accNumber == account_number?.accNumber);
                              console.log(`Dear ${chalk.green.italic.bold(name?.firstName)} ${chalk.green.bold.italic(name?.lastName)}, your Account Balance is $${chalk.blueBright.bold(account_number.balance)}. `)
                    }


          }
          else if(selected === 'Cash Withdrawal'){
                    console.log('Cash Withdraw')
                    let account_num = await inquirer.prompt({
                              type:'input',
                              name:'response',
                              message: 'Please enter your account number: '
                    })
                    let acc_number = parseInt(account_num.response,10)
                    let account_number = myBank.accounts.find(acc => acc.accNumber === acc_number)
                    if (!account_number){
                              console.log(chalk.red.bold.italic("Invalid Account Number.")) 
                    }
                    if (account_number){
                              let ans = await inquirer.prompt({
                                        type: 'input',
                                        name: 'PKR',
                                        message: 'Please enter the amount: '
                              })
                              if (ans.PKR > account_number.balance){
                                        console.log(chalk.red.bold.italic('Insufficient funds'))
                              }else{
                                        const amount = parseInt(ans.PKR, 10)
                                        let newBalance = account_number.balance - amount
                                        myBank.transaction({accNumber: account_num.response, balance : account_number.balance })
                                        console.log(`Cash WithDraw: $${chalk.blueBright.bold(amount)}`)
                                        console.log(`Cash remaining: $${chalk.greenBright.bold(newBalance)}`)
                              }

                    }
          }
          else if (selected === 'Cash Deposit'){
                    console.log('Cash Deposit')

                    let account_num = await inquirer.prompt({
                              type:'input',
                              name:'response',
                              message: 'Please enter your account number: '
                    }) 
                    let acc_number = parseInt(account_num.response,10)
                    let account_number = myBank.accounts.find(acc => acc.accNumber === acc_number)
                    if (!account_number){
                              console.log(chalk.red.bold.italic("Invalid Account Number.")) 
                    }
                    if (account_number){
                              let ans = await inquirer.prompt({
                                        type: 'input',
                                        name: 'PKR',
                                        message: 'Please enter the amount: '
                              })
                              let amount = parseInt(ans.PKR,10)
                              
                              let newBalance = account_number.balance + amount
                              myBank.transaction({accNumber: account_number.accNumber , balance : account_number.balance })
                              console.log(`Cash Deposited: $${chalk.blueBright.bold(newBalance)}`)
                              

                              }
                    }else if (selected === 'Quit'){
                              break
                     }
          }
          while (true)
} 
          

bankService(myBank)



