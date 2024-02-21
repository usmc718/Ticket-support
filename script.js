class Ticket {
    constructor(ticketNumber, summary, status, submittedBy, submittedDate) {
        this.ticketNumber = ticketNumber;
        this.summary = summary;
        this.status = status;
        this.submittedBy = submittedBy;
        this.submittedDate = submittedDate;
    }

    getTicketNumber() {
        return this.ticketNumber;
    }

    getSummary() {
        return this.summary;
    }

    getStatus() {
        return this.status;
    }

    getSubmittedBy() {
        return this.submittedBy;
    }

    getSubmittedDate() {
        return this.submittedDate;
    }

    updateStatus(newStatus) {
        this.status = newStatus;
        // Call server to update ticket status
        // Example: server.updateTicketStatus(this.ticketNumber, newStatus);
    }

    printTicketSummary() {
        console.log(`Ticket Number: ${this.ticketNumber}`);
        console.log(`Summary: ${this.summary}`);
        console.log(`Status: ${this.status}`);
        console.log(`Submitted By: ${this.submittedBy}`);
        console.log(`Submitted Date: ${this.submittedDate}`);
        // Additional formatting or printing logic can be added here
    }
}

class TicketManager {
    constructor() {
        this.tickets = [];
    }

    addTicket(ticket) {
        this.tickets.push(ticket);
        // Call server to add ticket
        // Example: server.addTicket(ticket);
    }

    searchTicketByNumber(ticketNumber) {
        return this.tickets.find(ticket => ticket.getTicketNumber() === ticketNumber) || null;
    }

    searchTicketsByUser(submittedBy) {
        return this.tickets.filter(ticket => ticket.getSubmittedBy() === submittedBy);
    }

    searchTicketsByStatus(status) {
        return this.tickets.filter(ticket => ticket.getStatus() === status);
    }

    printTicketSummaries() {
        this.tickets.forEach(ticket => {
            ticket.printTicketSummary();
            console.log('\n'); // Add newline for better readability
        });
    }
}

// Example usage:
const ticket1 = new Ticket('T123', 'Issue with network connection', 'Open', 'User123', new Date());
const ticket2 = new Ticket('T124', 'Software installation problem', 'Closed', 'User456', new Date());

const ticketManager = new TicketManager();
ticketManager.addTicket(ticket1);
ticketManager.addTicket(ticket2);

ticketManager.printTicketSummaries();
