"use strict";
let passcode = "roscoes";
class Employee {
    constructor() {
        this._fullName = "";
    }
    get fullName() {
        return this._fullName;
    }
    set fullName(newName) {
        if (passcode && passcode === "roscoes") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Not authorized ");
        }
    }
}
let employee = new Employee();
employee.fullName = "Johnny Appleseed";
if (employee.fullName) {
    console.log(employee.fullName);
}
console.log('testing');
