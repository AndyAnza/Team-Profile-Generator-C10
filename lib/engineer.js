const Employee = require('./employee');

class Engineer extends Employee {
    constructor (name, id, email, github){
        super(name, id, email, github)
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
        this.role = `Engineer 🤖`;
        }
    getGithub() {
        return this.github;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Engineer;
// let Engineer = new Engineer (`Michelangelo`, `003`, `michelangeloUwU@gmail.com`, `github.com/michelangeloUwU`)
// console.log(Engineer);
