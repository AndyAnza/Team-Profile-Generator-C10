function init() {
    const inquirer = require('inquirer');

    const employeeQuestions = [
        {
        type: 'input',
        name: 'name',
        message: `What's your employee name? ➡ `
        },
        {
        type: 'input',
        name: 'id',
        message: `What's your employee id?  ➡ `
        },
        {
        type: 'input',
        name: 'email',
        message: `What's your employee email? ➡ `
        },
        {
        type: 'list',
        name: 'role',
        message: `What your employee role?  ➡ `,
        choices: ['Manager', 'Engineer', 'Intern'],
        },
        {
        type: 'input',
        name: 'officeNumber',
        message: `What your employee office Number?  ➡ `, // if manager
        when: (answers) => answers.role === 'Manager'
        },
        {
        type: 'input',
        name: 'github',
        message: `What your employee GitHub account?  ➡ `, // if engineer
        when: (answers) => answers.role === 'Engineer'
        },
        {
        type: 'input',
        name: 'school',
        message: `Where does your employee studies?  ➡ `, // if intern
        when: (answers) => answers.role === 'Intern'
        },
    ];

    inquirer.prompt(employeeQuestions).then((answers) => {
        let employee;

        if (answers.role === 'Manager') {
            const Manager = require('./lib/manager');
            employee = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            employee.getOfficeNumber();
        } else if (answers.role === 'Engineer') {
            const Engineer = require('./lib/engineer');
            employee = new Engineer(answers.name, answers.id, answers.email, answers.github);
            employee.getGithub();
        } else if (answers.role === 'Intern') {
            const Intern = require('./lib/intern');
            employee = new Intern(answers.name, answers.id, answers.email, answers.school);
            employee.getSchool();
        } else {
            const Employee = require('./lib/employee');
        employee = new Employee(answers.name, answers.id, answers.email);
        }

        employee.getName();
        employee.getId();
        employee.getEmail();
        employee.getRole();
    });
}

init();


