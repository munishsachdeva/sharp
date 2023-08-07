<!-- Include Axios library -->
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

<!-- USER FORM SCRIPT -->
<script>
    // Put DOM elements into variables
    const myForm = document.querySelector('#my-form');
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const msg = document.querySelector('.msg');
    const userList = document.querySelector('#users');

    // Base URL for the CRUD CRUD API
    const apiBaseUrl = 'https://crudcrud.com/api/your-api-key'; // Replace 'your-api-key' with your actual API key

    // Function to delete a user from the API and UI
    function deleteUser(key, li) {
        // Make a DELETE request to the API
        axios.delete(`${apiBaseUrl}/${key}`)
            .then(() => {
                // Remove the corresponding list item from the UI
                li.remove();
            })
            .catch(error => console.error(error));
    }

    // Function to edit a user
    function editUser(key, li) {
        // Retrieve the user object from the API using the key
        axios.get(`${apiBaseUrl}/${key}`)
            .then(response => {
                const user = response.data;
                // Populate the main registration form with the user details
                nameInput.value = user.name;
                emailInput.value = user.email;
                
                // Create a save icon for saving the edited details
                const saveIcon = document.createElement('i');
                saveIcon.className = 'fa fa-save';
                saveIcon.setAttribute('aria-hidden', 'true');
                saveIcon.addEventListener('click', () => saveEditedUser(key, li));
                
                // Remove the edit icon and replace it with the save icon
                const editIcon = li.querySelector('.fa-edit');
                editIcon.replaceWith(saveIcon);
            })
            .catch(error => console.error(error));
    }

    // Function to save the edited user details
    function saveEditedUser(key, li) {
        const editedUser = {
            name: nameInput.value,
            email: emailInput.value
        };

        // Make a PUT request to the API to update the user details
        axios.put(`${apiBaseUrl}/${key}`, editedUser)
            .then(() => {
                // Update the user details in the UI
                const userText = li.firstChild;
                userText.textContent = `${editedUser.name}: ${editedUser.email}`;
                
                // Remove the save icon and replace it with the edit icon
                const saveIcon = li.querySelector('.fa-save');
                saveIcon.replaceWith(createEditIcon(key, li));

                // Clear the form after saving the edited details
                nameInput.value = '';
                emailInput.value = '';
            })
            .catch(error => console.error(error));
    }

    // Function to create an edit icon
    function createEditIcon(key, li) {
        const editIcon = document.createElement('i');
        editIcon.className = 'fa fa-edit';
        editIcon.setAttribute('aria-hidden', 'true');
        editIcon.addEventListener('click', () => editUser(key, li));
        return editIcon;
    }

    // Function to fetch and display all user details from the API
    function fetchAndDisplayUsers() {
        // Make a GET request to the API to retrieve all user details
        axios.get(apiBaseUrl)
            .then(response => {
                const users = response.data;
                // Iterate through each user and display their details on the website
                for (const key in users) {
                    if (users.hasOwnProperty(key)) {
                        const user = users[key];
                        // Create new list item with user
                        const li = document.createElement('li');
                        li.appendChild(document.createTextNode(`${user.name}: ${user.email}`));

                        // Create an edit icon
                        const editIcon = createEditIcon(key, li);
                        // Append the edit icon to the list item
                        li.appendChild(editIcon);

                        // Create a delete icon
                        const deleteIcon = document.createElement('i');
                        deleteIcon.className = 'fa fa-trash';
                        deleteIcon.setAttribute('aria-hidden', 'true');
                        deleteIcon.addEventListener('click', () => deleteUser(key, li));

                        // Append the delete icon to the list item
                        li.appendChild(deleteIcon);

                        // Append the list item to the user list in the HTML
                        userList.appendChild(li);
                    }
                }
            })
            .catch(error => console.error(error));
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

            // Make a POST request to the API to create a new user
            axios.post(apiBaseUrl, user)
                .then(response => {
                    const key = response.data._id; // Assuming the API returns an '_id' field for the newly created user

                    // Create new list item with user
                    const li = document.createElement('li');
                    li.appendChild(document.createTextNode(`${user.name}: ${user.email}`));

                    // Create an edit icon
                    const editIcon = createEditIcon(key, li);
                    // Append the edit icon to the list item
                    li.appendChild(editIcon);

                    // Create a delete icon
                    const deleteIcon = document.createElement('i');
                    deleteIcon.className = 'fa fa-trash';
                    deleteIcon.setAttribute('aria-hidden', 'true');
                    deleteIcon.addEventListener('click', () => deleteUser(key, li));

                    // Append the delete icon to the list item
                    li.appendChild(deleteIcon);

                    // Append the list item to the user list in the HTML
                    userList.appendChild(li);

                    nameInput.value = '';
                    emailInput.value = '';
                })
                .catch(error => console.error(error));
        }
    }

    // Listen for form submit
    myForm.addEventListener('submit', onSubmit);

    // Fetch and display users when the DOM has loaded
    document.addEventListener('DOMContentLoaded', fetchAndDisplayUsers);
</script>
