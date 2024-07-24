<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>hello</h1>
    <script src="ls.js"></script>
  </body>
  

// Contact Manager Program

// Initialize an empty array to store contacts
let contacts = [];

// Function to add a new contact
function addContact() {
  let name = prompt("Enter contact name: ");
  let phone = prompt("Enter contact phone number: ");
  let email = prompt("Enter contact email address: ");
  contacts.push({ name, phone, email });
  console.log(Contact ${name} added successfully!);
}

// Function to view the contact list
function viewContacts() {
  if (contacts.length === 0) {
    console.log("No contacts in the list.");
  } else {
    console.log("Contact List:");
    contacts.forEach((contact) => {
      console.log(
        Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}
      );
    });
  }
}

// Function to edit an existing contact
function editContact() {
  let name = prompt("Enter the name of the contact to edit: ");
  let index = contacts.findIndex((contact) => contact.name === name);
  if (index !== -1) {
    let phone = prompt("Enter new phone number: ");
    let email = prompt("Enter new email address: ");
    contacts[index] = { name, phone, email };
    console.log(Contact ${name} updated successfully!);
  } else {
    console.log("Contact not found.");
  }
}

// Function to delete a contact
function deleteContact() {
  let name = prompt("Enter the name of the contact to delete: ");
  let index = contacts.findIndex((contact) => contact.name === name);
  if (index !== -1) {
    contacts.splice(index, 1);
    console.log(Contact ${name} deleted successfully!);
  } else {
    console.log("Contact not found.");
  }
}

// Function to save contacts to a file (using localStorage)
function saveContactsToFile() {
  localStorage.setItem("contacts", JSON.stringify(contacts));
  console.log("Contacts saved to file.");
}

// Function to load contacts from a file (using localStorage)
function loadContactsFromFile() {
  let storedContacts = localStorage.getItem("contacts");
  if (storedContacts) {
    contacts = JSON.parse(storedContacts);
    console.log("Contacts loaded from file.");
  } else {
    console.log("No contacts file found.");
  }
}

// Main program loop
let load =true;

while (load) {
  console.log("Contact Manager");
  console.log("1. Add Contact");
  console.log("2. View Contacts");
  console.log("3. Edit Contact");
  console.log("4. Delete Contact");
  console.log("5. Save Contacts to File");
  console.log("6. Load Contacts from File");
  console.log("7. Exit");
  let choice = prompt("Enter your choice: ");

  switch (choice) {
    case "1":
      addContact();
      break;
    case "2":
      viewContacts();
      break;
    case "3":
      editContact();
      break;
    case "4":
      deleteContact();
      break;
    case "5":
      saveContactsToFile();
      break;
    case "6":
      loadContactsFromFile();
      break;
    case "7":
      console.log("Goodbye!");
      load=false;
    break;
    default:
      console.log("Invalid choice. Please try again.");
  }
}
</html>