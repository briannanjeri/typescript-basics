"use strict";
var _a;
console.log("hello world");
let age = 20;
if (age < 50) {
    age += 10;
    console.log(age);
}
function calculateTax(income, taxYear) {
    if (taxYear < 2022)
        return income;
    return income * 10;
}
console.log(calculateTax(2000, 2023));
let employee = {
    id: 1, name: 'Mosh',
    retire: (date) => {
        console.log(date);
    }
};
console.log(employee);
function kgToLbs(weight) {
    if (typeof weight == 'number')
        return weight * 2;
    else {
        return parseInt(weight);
    }
}
console.log(kgToLbs(40));
console.log(kgToLbs('40kg'));
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 50;
console.log(quantity);
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("no name");
}
greet(null);
function getCustomer(id) {
    return id == 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
//# sourceMappingURL=index.js.map