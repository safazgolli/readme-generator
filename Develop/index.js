// TODO: Include packages needed for this application

 const Markdown= require('./utils/generateMarkdown');
const fs = require('fs');
const  inquirer = require("inquirer");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Description of your project',
      },
      {
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation?',
      },
      {
        type: 'input',
        name: 'reason',
        message: 'Why did you build this project?',
      },
      {
        type: 'input',
        name: 'solution',
        message: ' What problem does it solve?',
      },
      {
        type: 'input',
        name: 'learn',
        message: 'What did you learn?',
      },
      {
        type: 'input',
        name: 'instalation',
        message: 'What are the steps required to install your project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'describe the usage of the app?',
      },
      {
        type: 'input',
        name: 'contribute',
        message: 'How to Contribute?',
      },

      {
        type: 'list',
        name: 'license',
        message: 'Choose license',
        choices: ['MIT','ISC', 'GNUPLv3'],
         filter(value){
           return value.toLowerCase();
        }
      },
      {
        type: 'input',
        name: 'test',
        message: 'Write test for your app?',
      },

      {
        type: 'input',
        name: 'GitHub',
        message: 'your GitHub?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'email?',
      },



];


const promptUser = function () {
    return inquirer.prompt(questions)
    .then((data)=> {
        const mark = Markdown.generateMarkdown(data);
        fs.writeFile( 'Readme.md', mark ,(err) =>
        err ? console.log(err) : console.log('Successfully created Readme.md!') )

    })


    .catch((err) => console.error(err));
}






function init() {
    promptUser();
    // writeToFile();


}

// Function call to initialize app
init();
