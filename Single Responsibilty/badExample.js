/* 
Bad example that violates the principle 
This class violates the SRP because it has more that one reason to change.
Let's say that we wanted to change the reportHours method.
To do this we have to change the code inside the Employee class,
which means that we could potentially break some other methods in our class.
*/

class Employee {
  constructor(employeeData) {
    this.employeeData = employeeData;
  }

  printName = () => {
    console.log("username", this.employeeData.name);
  };
  calculatePay() {
    console.log("calculate pay", this.employeeData.pay);
  }

  reportHours() {
    console.log("report hours", this.employeeData.hours);
  }

  saveToDB() {
    console.log("save to database", this.employeeData);
  }
}

const employeeName = new Employee({ name: "Mahmoud", pay: 100, hours: 4 });
employeeName.printName(); // username Mahmoud
employeeName.calculatePay(); // calculate pay 100
employeeName.reportHours(); // report hours 4
employeeName.saveToDB(); //save to database { name: 'Mahmoud', pay: 100, hours: 4 }
