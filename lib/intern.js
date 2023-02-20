const Employee = require('./employee');

class Intern extends Employee {
    constructor (name, id, email, school){
        super(name, id, email, school)
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
        this.role = `Intern`;
    }
    getSchool(){
        console.log(`School: ${this.school}`);
    }
    getRole(){
        console.log(`Role: ${this.role}`);
    }
}

let Wicca = new Intern (`Raphael`, `004`, `raphaelUwU@gmail.com`, `Splinter Tech School`);
console.log(Wicca);