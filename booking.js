// USER FORM SCRIPT
  
  // Put DOM elements into variables
  const myForm = document.querySelector('#my-form');
  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const msg = document.querySelector('.msg');
  const userList = document.querySelector('#users');
  
  // Listen for form submit
  myForm.addEventListener('submit', onSubmit);
  
  function onSubmit(e) {
    e.preventDefault();
    
    if(nameInput.value === '' || emailInput.value === '') {
      // alert('Please enter all fields');
      msg.classList.add('error');
      msg.innerHTML = 'Please enter all fields';
  
      // Remove error after 3 seconds
      setTimeout(() => msg.remove(), 3000);
    } else {
        const user = {
          name: nameInput.value,
          email: emailInput.value
        };
    
        // Check if there are existing users in local storage
        let users = localStorage.getItem('users');
        if (users) {
          users = JSON.parse(users);
        } else {
          users = [];
        }
    
        // Add the new user to the users array
        users.push(user);
    
        // Store the updated users array in local storage
        localStorage.setItem('users', JSON.stringify(users));
    
      // Create new list item with user
      const li = document.createElement('li');
  
      // Add text node with input values
      li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
  
      // Add HTML
      // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;
  
      // Append to ul
      userList.appendChild(li);
  
      // Clear fields
      nameInput.value = '';
      emailInput.value = '';
    }
  }