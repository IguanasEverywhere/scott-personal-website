const h2 = document.createElement('h2');
h2.textContent = 'This content added by JavaScript';

document.querySelector('body').appendChild(h2);

h2.classList.add("sub-message");

const h2Message = document.querySelectorAll('.sub-message')[0];

h2Message.addEventListener('click', function() {
  alert('hi');
});