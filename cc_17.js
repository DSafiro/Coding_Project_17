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

// Task 2: Create a SalesRep Class
class SalesRep {
    constructor (name) {
        this.name = name; // Sales rep name
        this.clients = []; // Array of customer objects
    };
    addClient(customer) {
        this.clients.push(customer); // Adds customer to the list
        customer.salesRep = this; // Assigns sales rep to customer
    };
    getClientTotal (name) {
        const client = this.clients.find(client => client.name === name); // Finds client by name
        if (client) {
            console.log(`Assigned Sales Rep: ${client.salesRep.name}, Total Spent by ${client.name}: $${client.getTotalSpent()}`); // If client is found -> outputs customer name and total spent
        } else {
            console.log(`Client not found.`) // Else client isn't found -> outputs client not found
        }
    };
}; // Creates sales rep class with attributes

// Test Cases
const customer1 = new Customer ("Timmy Turner", "timaeusturnip@email.com"); // Creates new customer object
customer1.addPurchase(485); // Adds purchase amount
customer1.addPurchase(500); // Adds purchase amount to existing history
console.log(`Customer Name: ${customer1.name}, Email: ${customer1.email}, Total Spent: $${customer1.getTotalSpent()}`); // Console logs customer information

const salesRep1 = new SalesRep ("Ash Ketchum");
salesRep1.addClient(customer1);
salesRep1.getClientTotal("Timmy Turner");
