// Get form elements
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');

// Handle form submission
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const message = messageInput.value.trim();

  if (name === '' || email === '' || phone === '' || message === '') {
    formFeedback.textContent = 'Please fill in all fields.';
  } else {
    
    // Send form data to server
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('message', message);

    fetch('/submit-contact-form', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        formFeedback.textContent = 'Thank you for contacting us!';
        contactForm.reset();
      } else {
        formFeedback.textContent = 'There was an error submitting your form. Please try again later.';
      }
    })
    .catch(error => {
      formFeedback.textContent = 'There was an error submitting your form. Please try again later.';
    });
  }
});

