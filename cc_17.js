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
            console.log(`Client not found.`); // Else client isn't found -> outputs client not found
        };
    };
}; // Creates sales rep class with attributes

// Task 3: Create a VIPCustomer Class (extends Customer)
class VIPCustomer extends Customer {
    constructor (name, email, vipLevel) { 
        super(name, email); // Grabs customer name and email from customer class
        this.vipLevel = vipLevel; // Customer VIP level
    };
    getTotalSpent() {
        const loyaltyBonus = super.getTotalSpent() * 1.1; // Adds 10% loyalty bonus to total spent
        return loyaltyBonus // Returns loyalty bonus
    };
}; // Creates VIP class with extended attributes

// Task 4: Build a Client Report System
const customer1 = new Customer ("Timmy Turner", "timaeusturnip@email.com"); // Creates new customer object
customer1.addPurchase(485); // Adds purchase amount
customer1.addPurchase(500); // Adds purchase amount to existing history
console.log(`Customer Name: ${customer1.name}, Email: ${customer1.email}, Total Spent: $${customer1.getTotalSpent()}`); // Console logs customer information

const customer2 = new Customer ("Eugene Krabs", "ilovemoney@email.com"); // Creates new customer object
customer2.addPurchase(100); // Adds purchase amount
customer2.addPurchase(200); // Adds purchase amount to existing history
console.log(`Customer Name: ${customer2.name}, Email: ${customer2.email}, Total Spent: $${customer2.getTotalSpent()}`); // Console logs customer information

const vipCust1 = new VIPCustomer ("Jimmy John", "jimothyjohnathon@email.com", "Gold"); // Creates new VIP customer object
vipCust1.addPurchase(950); // Adds purchase amount
console.log(`VIP Customer Name: ${vipCust1.name}, Email: ${vipCust1.email}, Total Spent with Bonus: $${vipCust1.getTotalSpent()}`); // Console logs VIP customer information

const vipCust2 = new VIPCustomer ("Mario Luigi", "princessisinanothercastle@email.com", "Platinum"); // Creates new VIP customer object
vipCust2.addPurchase(800); // Adds purchase amount
console.log(`VIP Customer Name: ${vipCust2.name}, Email: ${vipCust2.email}, Total Spent with Bonus: $${vipCust2.getTotalSpent()}`); // Console logs VIP customer information

const salesRep1 = new SalesRep ("Ash Ketchum"); // Creates new sales rep object
salesRep1.addClient(customer1); // Assigns customer 1 to sales rep
salesRep1.addClient(vipCust1); // Assigns VIP customer 1 to sales rep
salesRep1.getClientTotal("Timmy Turner"); // Gets total from client named Timmy Turner

const salesRep2 = new SalesRep ("Guy Fierri"); // Creates new sales rep object
salesRep2.addClient(customer2); // Assigns customer 2 to sales rep
salesRep2.addClient(vipCust2); // Assigns VIP customer 2 to sales rep
salesRep2.getClientTotal("Eugene Krabs"); // Gets total from client named Eugene Krabs

const allCustomers = [customer1, customer2, vipCust1, vipCust2]; // Converts all customers into an array

const totalRevenue = allCustomers.reduce((total, client) => total + client.getTotalSpent(), 0) // Calculates total revenue from all customers
console.log(`Total Customer Revenue: $${totalRevenue}`); // Outputs total revenue

const highValueCustomers = allCustomers.filter(customer => customer.getTotalSpent() > 500); // Identifies customers who spent over $500
console.log(`High Value Customers: ${highValueCustomers.map(customer => customer.name)}`); // Outputs high value customers

const customerSummary = allCustomers.map(customer => ({ // Array of customer naems and total spent
    name: customer.name,
    "Total Spent": "$"+customer.getTotalSpent().toFixed(2)
}));
console.log("Customer Summary:", customerSummary); // Outputs customer summary