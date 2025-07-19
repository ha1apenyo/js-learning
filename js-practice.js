const contacts = [
  { name: "Alice", phone: "123-456" },
  { name: "Bob", phone: "987-654" },
  { name: "Charlie" } // телефону нема
];

const found = contacts
    .find(contact => contact.name === 'Charlie');

    console.log(found?.phone);