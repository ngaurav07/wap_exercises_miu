describe("SavingsAccount Class", () => {
    let savingsAccount;

    beforeEach(() => {
        savingsAccount = new SavingsAccount(654321, 5); // 5% interest
    });

    describe("Constructor", () => {
        it("should create a savings account with the given number and interest rate, and a balance of 0", () => {
            expect(savingsAccount.getNumber()).to.equal(654321);
            expect(savingsAccount.getBalance()).to.equal(0);
            expect(savingsAccount.getInterest()).to.equal(5);
        });
    });

    describe("getInterest()", () => {
        it("should return the interest rate", () => {
            expect(savingsAccount.getInterest()).to.equal(5);
        });
    });

    describe("setInterest()", () => {
        it("should set the interest rate", () => {
            savingsAccount.setInterest(10);
            expect(savingsAccount.getInterest()).to.equal(10);
        });
    });

    describe("addInterest()", () => {
        it("should add the calculated interest to the balance", () => {
            savingsAccount.deposit(1000);
            savingsAccount.addInterest();
            expect(savingsAccount.getBalance()).to.equal(1050); // 1000 + 5% of 1000
        });
    });

    describe("toString()", () => {
        it("should return the correct string representation of the savings account", () => {
            expect(savingsAccount.toString()).to.equal("Savings Account 654321: balance 0, interest 5");
            savingsAccount.deposit(150);
            expect(savingsAccount.toString()).to.equal("Savings Account 654321: balance 150, interest 5");
            savingsAccount.setInterest(10);
            expect(savingsAccount.toString()).to.equal("Savings Account 654321: balance 150, interest 10");
        });
    });

    describe("SavingsAccount Class", () => {
        describe("endOfMonth()", () => {
            it("should add interest and return a string specifying how much interest was added", () => {
                const savingsAccount = new SavingsAccount(123456, 5);
                savingsAccount.deposit(1000);
                const report = savingsAccount.endOfMonth();
                expect(report).to.equal("Interest added SavingsAccount 123456: balance: 1050 interest: 50");
            });
        });
    });
})
