"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    Deposite(amount) {
        if (amount <= 0)
            throw new Error('Amount is invilid');
        this.balance += amount;
    }
}
let account = new Account(10, 'Nato Das', 12000);
account.Deposite(10);
console.log(account.balance);
//# sourceMappingURL=index.js.map