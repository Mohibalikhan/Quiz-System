import inquirer from "inquirer";
import chalk from "chalk";
let userintro = await inquirer.prompt([{
        type: "input",
        name: "username",
        message: "Enter your name"
    }]);
console.log(`Welcome ${chalk.blue(userintro.username)} to Quiz game!`);
const quiz = await inquirer.prompt([{
        name: "question1",
        type: "list",
        message: "What is the Capital of Pakistan?",
        choices: ["Islamabad", "Karachi", "Lahore", "Peshawar"]
    },
    {
        name: "question2",
        type: "list",
        message: "What is the National Animal of Pakistan?",
        choices: ["Lion", "Markhor", "Peacock", "Elephant"]
    },
    {
        name: "question3",
        type: "list",
        message: "What is the National Flower of Pakistan?",
        choices: ["Jasmine", "Rose", "Sunflower", "Tulip"]
    },
    {
        name: "question4",
        type: "list",
        message: "What is the National Game of Pakistan?",
        choices: ["Hockey", "Cricket", "Football", "Basketball"]
    },
    {
        name: "question5",
        type: "list",
        message: "What is the National Language of Pakistan?",
        choices: ["Urdu", "English", "Punjabi", "Sindhi"]
    }
]);
let score = 0;
switch (quiz.question1) {
    case "Islamabad":
        console.log("1. Correct");
        ++score;
        break;
    default:
        console.log("1. Incorrect  Correct answer is (Islamabad) ");
}
switch (quiz.question2) {
    case "Markhor":
        console.log("2. Correct");
        ++score;
        break;
    default:
        console.log("2. Incorrect Correct answer is (Markhor)");
}
switch (quiz.question3) {
    case "Jasmine":
        console.log("3. Correct");
        ++score;
        break;
    default:
        console.log("3. Incorrect  Correct answer is (Jasmine)");
}
switch (quiz.question4) {
    case "Hockey":
        console.log("4. Correct");
        ++score;
        break;
    default:
        console.log("4. Incorrect  Correct answer is (Hockey)");
}
switch (quiz.question5) {
    case "Urdu":
        console.log("5. Correct");
        ++score;
        break;
    default:
        console.log("5. Incorrect  Correct answer is (Urdu)");
}
console.log(chalk.bgBlue("\nQuiz Completed!"));
console.log(`\nYour score is ${score} out of 5`);
