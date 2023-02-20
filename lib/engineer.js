const Employee = require('./employee');

class Engineer extends Employee {
    constructor (name, id, email, github){
        super(name, id, email, github)
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
        this.role = `Engineer`;
        }
    getGithub() {
        console.log(`GitHub: ${this.github}`);
    }
    getRole() {
        console.log(`Role: ${this.role}`);
    }
}

module.exports = Engineer;
// let Engineer = new Engineer (`Michelangelo`, `003`, `michelangeloUwU@gmail.com`, `github.com/michelangeloUwU`)
// console.log(Engineer);
