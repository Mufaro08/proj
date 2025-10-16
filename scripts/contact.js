const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        formMessage.textContent = 'Please fill out all fields.';
        formMessage.style.color = 'red';
        return;
    }

   
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    formMessage.textContent = 'Message sent successfully!';
    formMessage.style.color = 'green';

    contactForm.reset();
});
