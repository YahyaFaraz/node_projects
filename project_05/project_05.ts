import inquirer from "inquirer"

async function word_counter() {
        let input = await inquirer.prompt ([
            {
                type: "input",
                name: "Paragraph",
                message: "Please enter a paragraph: "
            }
        ]) 

        let result =  input.Paragraph.trim().split(" ")
        let word_count = result.length
        console.log(`The amount of words in paragraph or sentence is ${word_count}.` )
}
word_counter()