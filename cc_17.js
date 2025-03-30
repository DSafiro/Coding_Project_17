// Task 1: Create a Customer Class
class Customer {
    constructor (name, email) {
        this.name = name; // Customer name
        this.email = email; // Customer email address
        this.purchaseHistory = []; // Customer purchase history
    };
    addPurchase (amount) {
        this.purchaseHistory.push(amount); // Adds purchase amount to purchase history
    };
    getTotalSpent () {
        return this.purchaseHistory.reduce((total, amount) => total + amount, 0) // Returns total amount spent
    };
}; // Creates customer class with attributes

const customer1 = new Customer ("Timmy Turner", "timaeusturnip@email.com"); // Creates new customer object
customer1.addPurchase(485); // Adds purchase amount
customer1.addPurchase(500); // Adds purchase amount to existing history
console.log(`Customer Name: ${customer1.name}, Email: ${customer1.email}, Total Spent: $${customer1.getTotalSpent()}`); // Console logs customer information

