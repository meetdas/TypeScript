"use strict";
function getCustomer(id) {
    return id === null ? null : { birthDay: new Date() };
}
let customer = getCustomer(10);
if (customer !== null && customer != undefined)
    console.log(customer.birthDay);
//# sourceMappingURL=index.js.map