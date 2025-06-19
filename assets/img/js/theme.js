const btn = document.getElementById('theme-toggle');
const accentSelect = document.getElementById('accent-select');

btn.onclick = () => {
  document.body.classList.toggle('dark');
  localStorage.theme = document.body.classList.contains('dark') ? 'dark' : 'light';
};

if (localStorage.theme === 'dark' || 
  (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.body.classList.add('dark');
}

accentSelect.onchange = () => {
  document.body.dataset.accent = accentSelect.value;
  localStorage.accent = accentSelect.value;
};
accentSelect.value = localStorage.accent || 'blue';
document.body.dataset.accent = accentSelect.value;
