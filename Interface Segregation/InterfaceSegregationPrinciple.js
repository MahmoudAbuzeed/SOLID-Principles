/*
Interface Segregation Principle (ISP)


Avoid fat interface.
Make fine grained interfaces that are client-specific, Clients should not be forced to implement interfaces they do not use
The general idea of interface segregation principle is that it’s better to have a lot of smaller interfaces than a few bigger ones.
This means that you don’t want to just start with an existing interface and add new methods.
Instead, start by building a new interface and then let your class implement multiple interfaces as needed.
Smaller interfaces mean that we should have a preference for composition over inheritance and for decoupling over coupling.
According to this principle, we should work to have many client-specific interfaces, avoiding the temptation of having one big, general-purpose interface.

*/
// // The Bad Example
// // Here we examine an interface that violates ISP:
// interface ISmartDevice {
//   model: string;
//   price: number;
//   print(model: string, price: number): string;
//   fax(): string;
//   scan(): string;
// }
// class AllInOnePrinter implements ISmartDevice {
//   model: string;
//   price: number;
//   constructor(model, price) {
//     this.model = model;
//     this.price = price;
//   }
//   print(model: string, price: number) { return `Device model is ${model}, and it's price ${price}` }
//   fax() { return "fax cade here" }
//   scan() { return "scanning code here" }
// }
// const device = new AllInOnePrinter("Printer", 5200);
// console.log(device.print("Printer", 5200)); // Device model is Sam, and it's price 5200
// console.log(device.fax()); // fax cade here
var AllInOnePrinter = /** @class */ (function () {
  function AllInOnePrinter(model, price) {
    this.model = model;
    this.price = price;
  }
  AllInOnePrinter.prototype.print = function (model, price) {
    return "Device model is " + model + ", and it's price " + price;
  };
  AllInOnePrinter.prototype.fax = function () {
    return "Sorry, I cant fax";
  };
  AllInOnePrinter.prototype.scan = function () {
    return "Sorry, I cant scan";
  };
  return AllInOnePrinter;
})();
var device = new AllInOnePrinter("Printer", 2000);
console.log(device.print("Printer", 2000)); // Device model is printer, and it's price 2000
console.log(device.fax()); // Sorry, I cant fax
var EconomicPrinter = /** @class */ (function () {
  function EconomicPrinter(model, price) {
    this.model = model;
    this.price = price;
  }
  EconomicPrinter.prototype.print = function (model, price) {
    return "Device model is " + model + ", and it's price " + price;
  };
  return EconomicPrinter;
})();
var economicPrinter = new EconomicPrinter("printer1", 1000);
console.log(economicPrinter.print("Printer1", 1000)); // Device model is realme, and it's price 2000
