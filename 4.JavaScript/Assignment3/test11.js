class BankAccount {
    constructor(accountNumber, accountHolder, accountBalance){
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.accountBalance = accountBalance;
    }

    getCurrentBalance(){
        return this.accountBalance;
    }
}
// Child
class Savings extends BankAccount {
    constructor(accountNumber, accountHolder, accountBalance, isSalary) {
        super(accountNumber, accountHolder, accountBalance)
        this.isSalary = isSalary;
    }
    withdraw (amount) {
        if(amount <= this.accountBalance){
            this.accountBalance = this.accountBalance - amount;
        }
        else
            return 'Not enough balance';
    }
}

class Current extends BankAccount {
    constructor(accountNumber, accountHolder, accountBalance, odLimit) {
        super(accountNumber, accountHolder, accountBalance)
        this.odLimit = odLimit;
    }

    withdraw (amount) {
        if(amount <= this.accountBalance + this.odLimit){
            // Fix account balance and odlimit logic
            // Balance is deducted from OD followed by Account balance
            if(amount > this.odLimit){
                amount = amount - this.odLimit;
                this.odLimit = 0;
                this.accountBalance = this.accountBalance - amount;
            }
            else
                this.odLimit = this.odLimit - amount;
        }
        else
            return 'Not enough balance or OD limit reached';
    }
}


var currentObject = new Current(1001, 'Pranav', 999999, 12456)
var savingObject = new Savings(1002, 'Gagan', 121212, 9999)

savingObject.withdraw(22);
console.log('Balance of ' + savingObject.accountHolder + ': ' + savingObject.getCurrentBalance());

currentObject.withdraw(50);
console.log('Balance of ' + currentObject.accountHolder + ': ' + currentObject.getCurrentBalance());