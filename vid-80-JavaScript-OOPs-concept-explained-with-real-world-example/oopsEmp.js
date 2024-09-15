class iuEmployees{
    constructor(empID, empName, empGender, empSalary){
        this.empID = empID;
        this.empName = empName;
        this.empGender = empGender;
        this.empSalary = empSalary;
    }
// creating new employee id with method
createEmpID(){
        console.log(`ID: ${this.empID}, Name: ${this.empName}, Gender: ${this.empGender}, Salry: ${this.empSalary}.     ${this.empName}'s employee id successfully created!`);
    }
}
// create the object of the code
const newEmployee = new iuEmployees('101', 'Faiz', 'Male', '80,0000')
newEmployee.createEmpID();

// Step 2

// Inheritance Example
class empOtherDetials extends iuEmployees{
    constructor(empID, empName, empRole){
        super(empID, empName)
        this.empRole = empRole;
        
    }
    // method overriding (polymorphism)
    asignEmpJobRoles(){
        console.log(`ID: ${this.empID}, Name: ${this.empName}, Role:  ${this.empRole}' - Are successfully provide by HR team!`);
    }
}
// another objecte creation
const newEmpRoles = new empOtherDetials('101', 'Faiz Alam', 'Full Stack Developer');
newEmpRoles.asignEmpJobRoles();