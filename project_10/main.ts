import inquirer from "inquirer";


class Student{
          name : string;
          constructor(name: string){
                    this.name = name
          }

}

class Person{
          students: Student[] = []

          addStudent(obj: Student){
                    this.students.push(obj)
          }
}
const persons = new Person()
const startProgram = async(persons: Person) => {
          let exit = false
          while(!exit){
                    console.log('--------------------------------Welcome User------------------------------------')
                    const user_input1 = await inquirer.prompt({
                              type: 'list',
                              name: 'input',
                              message: 'Who do you want to talk to: ',
                              choices: ['Yourself','Student','Exit']
         node mai           })
                    const user_choice = user_input1.input
                    if (user_choice == 'Yourself'){
                              console.log('Hye, I am talking to my own self.')
                              console.log('I am having fever today.')
                    }
                    else if (user_choice == 'Student'){
                              const student_choice = await inquirer.prompt({
                                        type: 'input',
                                        name:'choice',
                                        message: 'Which student do you want to talk to: '
                              }) 
                              const choice_of_student = student_choice.choice
                              const saved_student: Student|undefined = persons.students.find(val => val.name == choice_of_student)
                              
                              if (!saved_student){
                                        const newStudent = new Student(choice_of_student)
                                        persons.addStudent(newStudent)
                                        console.log(`Hello, I am ${newStudent.name}, how are you doing user.`)
                                        console.log(persons.students)
                              }  else {
                                       console.log(`I am ${saved_student.name}. Welcome back user, how are you doing?`)
                                       console.log(persons.students) 
                              }
                    } else if (user_choice === 'Exit'){
                         exit = true
                    }
          }
}
startProgram(persons)

