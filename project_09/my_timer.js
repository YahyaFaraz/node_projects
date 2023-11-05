import inquirer from "inquirer";
import differenceInSeconds from "date-fns/differenceInSeconds/index.js";

async function getResponse() {
    const response = await inquirer.prompt({
        type: 'input',
        name: 'user_response',
        message: 'Please enter the number of seconds: '
    });
    return parseInt(response.user_response, 10);  // Convert the input string to a number.

 }
function startTime(value) {
    const initialTime = new Date();
    const intervalTime = new Date(initialTime.getTime() + value * 1000);
    const interval = setInterval(() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, currentTime);
        if (timeDiff <= 0) {
            clearInterval(interval);
            console.log('Time has expired.');
            process.exit(0);
        }
        else {
            const minutes = Math.floor(timeDiff / 60);
            const seconds = timeDiff % 60;
            console.log(`${minutes} minute(s) ${seconds} second(s)`);
        }
    }, 1000);
}
getResponse().then(startTime);
