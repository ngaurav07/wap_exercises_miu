// const expect = chai.expect;

describe("Bank Class", () => {
    let bank;

    beforeEach(() => {
        bank = new Bank();
    });

    describe("addAccount()", () => {
        it("should add a new account and return its number", () => {
            const accountNumber = bank.addAccount();
            expect(accountNumber).to.equal(1);
            expect(bank.accounts.length).to.equal(1);
            expect(bank.accounts[0]).to.be.instanceOf(Account);
            expect(bank.accounts[0].getNumber()).to.equal(1);
        });
    });

    describe("addSavingsAccount(interest)", () => {
        it("should add a new savings account and return its number", () => {
            const accountNumber = bank.addSavingsAccount(5);
            expect(accountNumber).to.equal(2);
            expect(bank.accounts.length).to.equal(1);
            expect(bank.accounts[0]).to.be.instanceOf(SavingsAccount);
            expect(bank.accounts[0].getNumber()).to.equal(2);
            expect(bank.accounts[0].getInterest()).to.equal(5);
        });
    });

    describe("addCheckingAccount(overdraft)", () => {
        it("should add a new checking account and return its number", () => {
            const accountNumber = bank.addCheckingAccount(500);
            expect(accountNumber).to.equal(3);
            expect(bank.accounts.length).to.equal(1);
            expect(bank.accounts[0]).to.be.instanceOf(CheckingAccount);
            expect(bank.accounts[0].getNumber()).to.equal(3);
            expect(bank.accounts[0].getOverdraftLimit()).to.equal(500);
        });
    });

    describe("closeAccount(number)", () => {
        it("should close the account with the given number", () => {
            bank.addAccount();
            bank.addSavingsAccount(5);
            bank.addCheckingAccount(500);
            bank.closeAccount(2);
            expect(bank.accounts.length).to.equal(3);
            expect(bank.accounts.find(account => account.getNumber() === 2)).to.be.undefined;
        });
    });

    describe("accountReport()", () => {
        it("should return a string report of all accounts", () => {
            bank.addAccount();
            bank.addSavingsAccount(5);
            bank.addCheckingAccount(500);
            const report = bank.accountReport();
            expect(report).to.include("Account 7: balance 0\nSavings Account 8: balance 0, interest 5\nChecking Account 9: balance 0, overdraft limit 500");
        });
    });

    // describe("endOfMonth()", () => {
    //     it("should return a string report of end of month processing for all accounts", () => {
    //         const acc1 = bank.addAccount();
    //         const acc2 = bank.addSavingsAccount(5);
    //         const acc3 = bank.addCheckingAccount(500);

    //         bank.accounts[1].deposit(1000); 
    //         bank.accounts[2].withdraw(600);

    //         const report = bank.endOfMonth();
    //         console.log(report);
    //         // expect(report).to.include(`Interest added SavingsAccount ${acc2}: balance: 1050 interest: 50`);
    //         // expect(report).to.include(`Warning   , low balance CheckingAccount ${acc3}: balance: -600 overdraft limit: 500`);
    //     });
    // });
});
