// SINGLE RESPONSIBILITY PRINCIPLE (SRP)
// This principle mean that, “a class should have one, and only one, reason to change.”
// Following this principle means that each class only does one thing and every class or module only has responsibility for one part of the software’s functionality.
// More simply, each class should solve only one problem.
// Single responsibility principle is a relatively basic principle that we are already utilizing to build code.
// It can be applied to classes, software components, and microservices.
// Utilizing this principle makes code easier to test and maintain, it makes software easier to implement, and it helps to avoid unanticipated side-effects of future changes.

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

/* Good example */
class EmployeeData {
  constructor(employeeData) {
    this.employeeData = employeeData;
  }
  printData = () => {
    console.log("username", this.employeeData.name);
  };
}

class PayCalculator {
  constructor(employeeData) {
    this.employeeData = employeeData;
  }

  calculatePay = () => {
    console.log("userPay", this.employeeData.pay);
  };
}

class HourReporter {
  constructor(employeeData) {
    this.employeeData = employeeData;
  }

  reportHours = () => {
    console.log("userHours", this.employeeData.hours);
  };
}

class EmployeeServer {
  constructor(employeeData) {
    this.employeeData = employeeData;
  }

  saveToDB() {
    console.log("saved to database", this.employeeData);
  }
}

const employeeData = new EmployeeData({ name: "Mahmoud", pay: 100, hours: 4 });
const payCalculator = new PayCalculator({ name: "Ahemd", pay: 50, hours: 2 });
const hourReporter = new HourReporter({ name: "Ali", pay: 70, hours: 7 });
const employeeServer = new EmployeeServer({
  name: "Alia",
  pay: 200,
  hours: 14,
});

employeeData.printData(); // username Mahmoud
payCalculator.calculatePay(); // userPay 50
hourReporter.reportHours(); // userHours 7
employeeServer.saveToDB(); //saved to database { name: 'Alia', pay: 200, hours: 14 }
