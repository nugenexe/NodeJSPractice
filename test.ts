let passcode = "roscoes"

class Employee {
    private _fullName: String = ""

    get fullName(): String {
        return this._fullName
    }

    set fullName(newName: String) {
        if (passcode && passcode === "roscoes") {
            this._fullName = newName
        } else {
            console.log("Error: Not authorized ")
        }
    }
}
let employee = new Employee()
employee.fullName = "Johnny Appleseed"

if (employee.fullName) {
    console.log(employee.fullName)
}

console.log('testing')