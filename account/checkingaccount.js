// const Account = require("./account"); // Ensure you have the correct path


class CheckingAccount extends Account {

    constructor(number, overdraftLimit) {
        super(number);
        this._overdraftLimit = overdraftLimit;
    }

    getOverdraftLimit() {
        return this._overdraftLimit;
    }

    setOverdraftLimit(overdraftLimit) {
        this._overdraftLimit = overdraftLimit;
    }


    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > this.getBalance() + this._overdraftLimit) {
            throw Error("Insufficient funds, including overdraft limit");
        }
        this._balance -= amount;
    }


    toString() {
        return "Checking Account " + this._number + ": balance " + this._balance + ", overdraft limit " + this._overdraftLimit;
    }

    endOfMonth() {
        if (this.getBalance() < 0) {
            return `Warning, low balance CheckingAccount ${this._number}: balance: ${this._balance} overdraft limit: ${this._overdraftLimit}`;
        }
        return "";
    }
}

// module.exports = CheckingAccount;
