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
      userList.appendChild(li);
  
      nameInput.value = '';
      emailInput.value = '';
    }
  }
  
