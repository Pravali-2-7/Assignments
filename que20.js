function createCounter() {
    let count = 0;
    return {
        increment: function () {
            count++;
            console.log("Current count:", count);
        },
        decrement: function () {
            count--;
            console.log("Current count:", count);
        },
        getCount: function () {
            console.log("Current count:", count);
            return count;
        }
    };
}

// Usage - Question 1
const counter1 = createCounter();
counter1.increment();
counter1.increment();
counter1.decrement();
const counter2 = createCounter();
counter2.increment();
counter2.getCount();
console.log(counter1.count);

function createBankAccount() {
    let balance = 0;
    let transactionHistory = [];
    return {
        deposit: function (amount) {
            if (amount > 0) {
                balance += amount;
                transactionHistory.push(`Deposited: ${amount}`);
                console.log(`Deposited: ${amount}`);
            } else {
                console.log("Enter valid amount");
            }
        },
        withdraw: function (amount) {
            if (amount <= balance) {
                balance -= amount;
                transactionHistory.push(`Withdrawn: ${amount}`);
                console.log(`Withdrawn: ${amount}`);
            } else {
                transactionHistory.push(`Failed Withdrawal: ${amount}`);
                console.log("Insufficient balance");
            }
        },
        checkBalance: function () {
            console.log("Current Balance:", balance);
            return balance;
        },
        getTransactionHistory: function () {
            console.log("Transaction History:");
            transactionHistory.forEach(t => console.log(t));
            return transactionHistory;
        }
    };
}

// Usage - Question 2
const account = createBankAccount();
account.deposit(500);
account.withdraw(200);
account.withdraw(400);
account.checkBalance();
console.log(account.balance);
account.getTransactionHistory();
