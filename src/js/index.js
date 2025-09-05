/* Simple theme toggle functionality */
const checkbox = document.getElementById('theme-toggle');
const toggleIcon = document.querySelector('.toggle-icon');

checkbox.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  
  // Update icon based on checkbox state
  if (checkbox.checked) {
    toggleIcon.textContent = '☀️';
  } else {
    toggleIcon.textContent = '🌙';
  }
});
