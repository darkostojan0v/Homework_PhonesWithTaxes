console.log('-----Phones with taxes included-----');

var tax = 5;
var taxrate = 5 / 100;
var phone = 119.95 * taxrate;
var phonewithtax = phone + 119.95;
var numberofPhones = 30;
console.log(`The price of 30 phones with tax included is ${phonewithtax * numberofPhones} dollars!`);