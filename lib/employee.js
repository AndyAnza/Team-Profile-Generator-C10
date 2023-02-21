class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'employee';
    }
    getName() {
        return this.name.toUpperCase();
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email.toLowerCase();
    }
    getRole() {
        return this.role;
    }
}

module.exports = Employee;

// let Donatello = new Employee(`Donatello`, `001`, `donatelloUwU@gmail.com`);
// console.log(Donatello);

