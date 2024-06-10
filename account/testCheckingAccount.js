describe("CheckingAccount Class", () => {
    let checkingAccount;

    beforeEach(() => {
        checkingAccount = new CheckingAccount(123456, 500);
    });

    describe("constructor(number, overdraftLimit)", () => {
        it("should create a new checking account with the given number and overdraft limit", () => {
            expect(checkingAccount.getNumber()).to.equal(123456);
            expect(checkingAccount.getOverdraftLimit()).to.equal(500);
            expect(checkingAccount.getBalance()).to.equal(0);
        });
    });

    describe("getOverdraftLimit()", () => {
        it("should return the overdraft limit", () => {
            expect(checkingAccount.getOverdraftLimit()).to.equal(500);
        });
    });

    describe("setOverdraftLimit(overdraftLimit)", () => {
        it("should set the overdraft limit", () => {
            checkingAccount.setOverdraftLimit(1000);
            expect(checkingAccount.getOverdraftLimit()).to.equal(1000);
        });
    });

    describe("withdraw(amount)", () => {
        it("should throw an error if the amount is less than or equal to zero", () => {
            expect(() => checkingAccount.withdraw(0)).to.throw(RangeError, "Withdraw amount has to be greater than zero");
        });

        it("should throw an error if the amount exceeds the balance plus overdraft limit", () => {
            expect(() => checkingAccount.withdraw(600)).to.throw(Error, "Insufficient funds, including overdraft limit");
        });

        it("should allow withdrawal within the overdraft limit", () => {
            checkingAccount.withdraw(500);
            expect(checkingAccount.getBalance()).to.equal(-500);
        });

        it("should deduct the correct amount from the balance", () => {
            checkingAccount.deposit(1000);
            checkingAccount.withdraw(600);
            expect(checkingAccount.getBalance()).to.equal(400);
        });
    });

    describe("toString()", () => {
        it("should return the correct string representation of the checking account", () => {
            expect(checkingAccount.toString()).to.equal("Checking Account 123456: balance 0, overdraft limit 500");
        });
    });

    describe("endOfMonth()", () => {
        it("should return an empty string if balance is not below zero", () => {
            checkingAccount.deposit(1000);
            const report = checkingAccount.endOfMonth();
            expect(report).to.equal("");
        });
    });
});
