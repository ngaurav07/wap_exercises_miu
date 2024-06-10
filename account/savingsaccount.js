class SavingsAccount extends Account {

    constructor(number, interest) {
        super(number);
        this._interest = interest;
    }


    getInterest() {
        return this._interest;
    }


    setInterest(interest) {
        this._interest = interest;
    }


    addInterest() {
        const interestAmount = this.getBalance() * this._interest / 100;
        this.deposit(interestAmount);
    }

    toString() {
        return "Savings Account " + this._number + ": balance " + this._balance + ", interest " + this._interest;
    }

    endOfMonth() {
        const interestAmount = this.getBalance() * this._interest / 100;
        this.addInterest();
        return `Interest added SavingsAccount ${this._number}: balance: ${this._balance} interest: ${interestAmount}`;
    }
}

// module.exports = SavingsAccount;