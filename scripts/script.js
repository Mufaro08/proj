const firstParagraph = document.getElementById("myName");
const secondParagraph = document.getElementById("copyright");
const thirdParagraph = document.getElementById("lastModified");

const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

firstParagraph.textContent = `Mufaro Justice Tapera`;
secondParagraph.textContent = `© ${currentYear} My Web Development Journey. All rights reserved.`;
thirdParagraph.textContent = `Last Modified: ${lastModified}`;



const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');
const modalButtons = document.querySelectorAll('.project-modal-button');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close-button');

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});

modalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modalId = button.dataset.modal;
    const modal = document.getElementById(modalId);
    modal.style.display = 'flex';
  });
});

closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    modal.style.display = 'none';
  });
});

window.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
  }
});
