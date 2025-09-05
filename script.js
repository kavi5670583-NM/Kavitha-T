// Dark mode toggle with save to localStorage

const body = document.body;

const toggleBtn = document.getElementById('themeToggle');

const saved = localStorage.getItem('theme') || 'dark';

if (saved === 'light') body.classList.add('light');

toggleBtn.addEventListener('click', () => {

  body.classList.toggle('light');

  localStorage.setItem('theme', body.classList.contains('light') ? 'light' : 'dark');

});

// Footer year

document.getElementById('year').textContent = new Date().getFullYear();