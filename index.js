let contactBook = {
    contacts: [
        { name: 'Dima', phone: '123-456-789', email: 'dima@example.com' },
        { name: 'Anna', phone: '123-456-789', email: 'anna@example.com' },
        { name: 'John', phone: '123-456-778', email: 'john@example.com' }
    ],
    
    findContactByName(name) {
        return this.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase()) || 'Контакт не знайдено';
    },
    
    addContact(name, phone, email) {
        const existingContact = this.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
        if (existingContact) {
            return 'Контакт з таким ім\'ям вже існує';
        }

        this.contacts.push({ name, phone, email });
        return 'Контакт успішно додано';
    }
};

console.log(contactBook.findContactByName('Anna'));
console.log(contactBook.addContact('Maria', '123-456-781', 'maria@example.com')); 
console.log(contactBook.contacts);
