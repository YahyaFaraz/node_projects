import inquirer from "inquirer"
import chalk from "chalk"
import { differenceInSeconds } from "date-fns"
differenceInSeconds
 


const response = await inquirer.prompt({
          type: 'input',
          name: 'user_response',
          message: 'Please enter the number of seconds: '
})

let user_response = response.user_response


function startTime(value: number){
          const initialTime = new Date().setSeconds(new Date().getSeconds() + value)
          const intervalTime = new Date(initialTime)
          setInterval(() => {
                    const currentTime = new Date()
                    const timeDiff = differenceInSeconds(intervalTime, currentTime)
                    if (timeDiff <= 0){
                              console.log('Timer has expired.')
                              process.exit()
                    }
                    const minute = Math.floor((timeDiff%(3600 * 24))/3600)
                    const sec = Math.floor(timeDiff % 60)
                    console.log(`${minute}:${sec}`)
          }, 1000)
}

startTime(user_response)