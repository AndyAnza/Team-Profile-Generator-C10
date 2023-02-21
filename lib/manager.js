const Employee = require('./employee');

class Manager extends Employee {

    constructor(name, id, email, officeNumber){
        super(officeNumber)
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
        this.role = 'Manager 🏢';
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Manager;
// let Leonardo = new Manager (`Leonardo`, `002`, `leonardoUwU@gmail.com`, `123`);
// console.log(Leonardo);