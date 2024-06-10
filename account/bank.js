// const SavingsAccount = require("./savingsaccount"); 
// const CheckingAccount = require("./checkingaccount"); 

class Bank {
    static nextNumber = 1;

    constructor() {
        this.accounts = [];
    }

    addAccount() {
        const account = new Account(Bank.nextNumber++);
        this.accounts.push(account);
        return account.getNumber();
    }

    addSavingsAccount(interest) {
        const savingsAccount = new SavingsAccount(Bank.nextNumber++, interest);
        this.accounts.push(savingsAccount);
        return savingsAccount.getNumber();
    }

    addCheckingAccount(overdraft) {
        const checkingAccount = new CheckingAccount(Bank.nextNumber++, overdraft);
        this.accounts.push(checkingAccount);
        return checkingAccount.getNumber();
    }

    closeAccount(number) {
        this.accounts = this.accounts.filter(account => account.getNumber() !== number);
    }

    accountReport() {
        return this.accounts.map(account => account.toString()).join("\n");
    }
    endOfMonth() {
        return this.accounts.map(account => account.endOfMonth()).filter(report => report !== "").join("\n");
    }
}

// module.exports = Bank;
