// The Good Example
// Here we apply the ISP and we separate the single ISmartDevice interface into three smaller interfaces: IPrinter, IFax, and IScanner.
var AllInOnePrinter = /** @class */ (function () {
    function AllInOnePrinter(model, price) {
        this.model = model;
        this.price = price;
    }
    AllInOnePrinter.prototype.print = function (model, price) {
        return "Device model is " + model + ", and it's price " + price;
    };
    AllInOnePrinter.prototype.fax = function () {
        return "Sorry, I can not fax";
    };
    AllInOnePrinter.prototype.scan = function () {
        return "Sorry, I can not scan";
    };
    return AllInOnePrinter;
}());
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
}());
var economicPrinter = new EconomicPrinter("printer1", 1000);
console.log(economicPrinter.print("Printer1", 1000)); // Device model is realme, and it's price 2000
