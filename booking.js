// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

// Function to delete a user
function deleteUser(key, li) {
    // Remove the user from the local storage
    localStorage.removeItem(key);

    // Remove the corresponding list item from the UI
    li.remove();
}


// Function to edit a user
function editUser(key, li) {
    // Retrieve the user object from the local storage using the key
    const user = JSON.parse(localStorage.getItem(key));

    // Prompt the user to enter the corrected email
    const correctedEmail = prompt('Enter the corrected email:');

    // Update the user object with the corrected email
    user.email = correctedEmail;

    // Store the updated user object back in the local storage using the key
    localStorage.setItem(key, JSON.stringify(user));

    // Update the email in the UI
    const userText = li.firstChild;
    userText.textContent = `${user.name}: ${user.email}`;
}

function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000);
    } else {
        const user = {
            name: nameInput.value,
            email: emailInput.value
        };

        // Generate a unique key for the user
        const key = `user_${Date.now()}`;

        // Store the user object in the local storage using the generated key
        localStorage.setItem(key, JSON.stringify(user));

        // Create new list item with user
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${user.name}: ${user.email}`));

        // Create an edit button
        const editButton = document.createElement('button');
        editButton.innerText = 'Edit';
        editButton.addEventListener('click', () => editUser(key, li));

        // Append the edit button to the list item
        li.appendChild(editButton);

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', () => deleteUser(key, li));

        // Append the delete button to the list item
        li.appendChild(deleteButton);

        // Append the list item to the user list in the HTML
        userList.appendChild(li);

        nameInput.value = '';
        emailInput.value = '';
    }
}

