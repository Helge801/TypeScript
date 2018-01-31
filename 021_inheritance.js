var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Report = /** @class */ (function () {
    function Report(name) {
        this.name = name;
        this.companyProfile = name;
    }
    return Report;
}());
var InvoiceA = /** @class */ (function (_super) {
    __extends(InvoiceA, _super);
    function InvoiceA(name, total) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.total = total;
        return _this;
    }
    InvoiceA.prototype.printInvoice = function () {
        return this.name + ", " + this.total;
    };
    return InvoiceA;
}(Report));
var BillOfLading = /** @class */ (function (_super) {
    __extends(BillOfLading, _super);
    function BillOfLading(name, city, state) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.city = city;
        _this.state = state;
        return _this;
    }
    BillOfLading.prototype.printBol = function () {
        return this.name + ", " + this.city + ", " + this.state;
    };
    return BillOfLading;
}(Report));
var invoice = new InvoiceA('Google', 200);
var invoiceTwo = new InvoiceA('Yahoo', 6000);
var bol = new BillOfLading('Google', 'Scottsdale', "AZ");
console.log(invoice);
console.log(invoice.companyProfile);
console.log(invoice.printInvoice());
console.log(invoiceTwo.printInvoice());
console.log(bol.printBol());
//# sourceMappingURL=021_inheritance.js.map