import inquirer from "inquirer";



let to_do: string [] = [];
let  sum_up = true

let to_do_app = async () => {
    while (sum_up){
        const  answers: {TODO: string, addmore: boolean} 
        = await inquirer.prompt([{
            type: "input",
            name: "TODO",
            message:"What would you like to add in your to-do list? "
        },
        {
            type: "confirm",
            name: "addmore",
            message: "Would you like to add more TO-DO's ? ",
            default: false
        }
    ]);
        const {TODO, addmore} = answers;
        console.log(answers)
        if (TODO){
            to_do.push(TODO)
        }
        else{
            console.log("Please enter valid text.")
        }
        sum_up = addmore;
    }
    if (to_do.length > 0){

    }else{
        console.log('No task found.')
    }
}
to_do_app()