class Employee {

    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'employee';
    }
    getName() {
        console.log(`Name: ${this.name}`);
    }
    getId() {
        console.log(`ID: ${this.id}`);
    }
    getEmail() {
        console.log(`Email: ${this.email}`);
    }
    getRole() {
        console.log(`Role: ${this.role}`);
    }
}

module.exports = Employee;

let Andy = new Employee(`Donatello`, `001`, `donatelloUwU@gmail.com`);
console.log(Andy);
