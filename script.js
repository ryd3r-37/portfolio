const themeSwitch = document.getElementById('switch');
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
  themeSwitch.checked = true;
  document.body.classList.add('light-mode');
} else {
  themeSwitch.checked = false;
  document.body.classList.remove('light-mode');
}

themeSwitch.addEventListener('change', () => {
  if (themeSwitch.checked) {
    localStorage.setItem('theme', 'light');
    document.body.classList.add('light-mode');
  } else {
    localStorage.setItem('theme', 'dark');
    document.body.classList.remove('light-mode');
  }
});

if (localStorage.getItem('theme') === 'light') {
  document.documentElement.classList.add('light-mode');
}

document.addEventListener('DOMContentLoaded', () => {
  const themeSwitch = document.getElementById('switch');
  
  if (!themeSwitch) return;

  themeSwitch.checked = (localStorage.getItem('theme') === 'light');

  themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
      document.documentElement.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    }
  });
});

if (localStorage.getItem('theme') === 'light') {
  document.documentElement.classList.add('light-mode');
}

document.addEventListener('DOMContentLoaded', () => {
  const themeSwitch = document.getElementById('switch');
  if (!themeSwitch) return;

  themeSwitch.checked = (localStorage.getItem('theme') === 'light');

  themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
      document.documentElement.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    }
  });
});

function openModal(src) {
  const modal = document.getElementById('certModal');
  const modalImg = document.getElementById('modalImg');
  if (modal && modalImg) {
    modalImg.src = src;
    modal.classList.remove('hidden');
  }
}