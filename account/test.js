const expect = chai.expect;
describe("Account Class", () => {
    let account;

    beforeEach(() => {
        account = new Account(123456);
    });

    describe("Constructor", () => {
        it("should create an account with the given number and a balance of 0", () => {
            expect(account.getNumber()).to.equal(123456);
            expect(account.getBalance()).to.equal(0);
        });
    });

    describe("getNumber()", () => {
        it("should return the account number", () => {
            expect(account.getNumber()).to.equal(123456);
        });
    });

    describe("getBalance()", () => {
        it("should return the current balance", () => {
            expect(account.getBalance()).to.equal(0);
        });
    });

    describe("deposit(amount)", () => {
        it("should increase the balance by the deposited amount", () => {
            account.deposit(100);
            expect(account.getBalance()).to.equal(100);
        });

        it("should throw a RangeError if the deposit amount is less than or equal to zero", () => {
            expect(() => account.deposit(0)).to.throw(RangeError, "Deposit amount has to be greater than zero");
            expect(() => account.deposit(-50)).to.throw(RangeError, "Deposit amount has to be greater than zero");
        });
    });

    describe("withdraw(amount)", () => {
        beforeEach(() => {
            account.deposit(200);
        });

        it("should decrease the balance by the withdrawn amount", () => {
            account.withdraw(50);
            expect(account.getBalance()).to.equal(150);
        });

        it("should throw a RangeError if the withdraw amount is less than or equal to zero", () => {
            expect(() => account.withdraw(0)).to.throw(RangeError, "Withdraw amount has to be greater than zero");
            expect(() => account.withdraw(-50)).to.throw(RangeError, "Withdraw amount has to be greater than zero");
        });

        it("should throw an Error if the withdraw amount is greater than the balance", () => {
            expect(() => account.withdraw(300)).to.throw(Error, "Insufficient funds");
        });
    });

    describe("toString()", () => {
        it("should return the correct string representation of the account", () => {
            expect(account.toString()).to.equal("Account 123456: balance 0");
            account.deposit(150);
            expect(account.toString()).to.equal("Account 123456: balance 150");
        });
    });

    describe("endOfMonth()", () => {
        it("should return an empty string", () => {
            expect(account.endOfMonth()).to.equal("");
        });
    });
});
