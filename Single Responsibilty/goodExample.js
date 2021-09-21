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
const payCalculator = new PayCalculator({ name: "Ahmed", pay: 50, hours: 2 });
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
