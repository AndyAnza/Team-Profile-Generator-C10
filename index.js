const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const generateHTML = require('./dist/generateHTML.js');

const managerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: `What's the name of the manager? ➡ `
  },
  {
    type: 'input',
    name: 'id',
    message: `What's the id of the manager?  ➡ `
  },
  {
    type: 'input',
    name: 'email',
    message: `What's the email of the manager? ➡ `
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: `What's the office number of the manager  ➡ `
  }
];

const roleQuestion = [
  {
    type: 'list',
    name: 'role',
    message: `What do you want to do now?  ➡ `,
    choices: ['Create Engineer', 'Create Intern', 'Finish building my team'],
  }
];

const engineerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: `What's the engineer's name? ➡ `
  },
  {
    type: 'input',
    name: 'id',
    message: `What's the engineer's id?  ➡ `
  },
  {
    type: 'input',
    name: 'email',
    message: `What's the engineer's email? ➡ `
  },
  {
    type: 'input',
    name: 'github',
    message: `What's the engineer's GitHub account?  ➡ `
  }
];

const internQuestions = [
  {
    type: 'input',
    name: 'name',
    message: `What's the name of the intern? ➡ `
  },
  {
    type: 'input',
    name: 'id',
    message: `What's the id of the intern?  ➡ `
  },
  {
    type: 'input',
    name: 'email',
    message: `What's the email of the intern? ➡ `
  },
  {
    type: 'input',
    name: 'school',
    message: `Name the school where the intern studies  ➡ `
  },
];

async function init() {
    
  let employees = [];
  let done = false;

  console.log(`\n--- Create your team profile 💻---\n`);
  let managerAnswers = await inquirer.prompt(managerQuestions);
  let manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber);
  employees.push(manager);

  while (!done) {
    let roleAnswers = await inquirer.prompt(roleQuestion);

    if (roleAnswers.role === 'Create Engineer') {
      let engineerAnswers = await inquirer.prompt(engineerQuestions);
      let engineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github);
      employees.push(engineer);

    } else if (roleAnswers.role === 'Create Intern') {
      let internAnswers = await inquirer.prompt(internQuestions);
      let intern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school);
      employees.push(intern);

    } else {
      done = true;
      let html = generateHTML(employees);
      console.log(`\n--- Your team has been successfully generated ✅ ---\n`);
      const finalHTML = './dist/final.html';
      fs.writeFileSync(finalHTML, html);
      console.log(`Your team's HTML file has been generated at ${finalHTML}`);
    }
  }
}
init()