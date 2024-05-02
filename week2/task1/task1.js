localStorage.getItem('theme')?localStorage.getItem('theme'):localStorage.setItem('theme','light')
var theme=localStorage.getItem('theme')
if (theme === 'dark') {
    document.body.classList.add('dark-bg');
    document.getElementById('flexSwitch').checked = true;
  };

document.getElementById('flexSwitch').addEventListener('change', function() {
    if (this.checked) {
      document.body.classList.add('dark-bg');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-bg');
      localStorage.setItem('theme', 'light');
    }
});