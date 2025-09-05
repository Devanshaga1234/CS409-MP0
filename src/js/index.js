const checkbox = document.getElementById('theme-toggle');
const toggleIcon = document.querySelector('.toggle-icon');

checkbox.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  if (checkbox.checked) {
    toggleIcon.textContent = '☀️';
  } else {
    toggleIcon.textContent = '🌙';
  }
});

// This inspiration for this was taken from the following website: https://codepen.io/Umer_Farooq/pen/eYJgKGN 
// and was implemented with the help of ChatGPT. The link to the ChatGPT conversation is:
// https://chatgpt.com/share/68ba6bd9-b248-800b-90a2-48c36facc9a5
