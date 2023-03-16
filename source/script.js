const themes = {
    light: {
      background: 'white',
      text: 'black',
    },
    dark: {
      background: 'black',
      text: 'white',
    }
  };

  const darkModeToggle = document.querySelector('input[name=theme]');
darkModeToggle.addEventListener('change', function({ target }) {
  setTheme(target.checked ? 'dark' : 'light');
});

function setTheme(newTheme) {
    const themeColors = themes[newTheme]; // Seleciona o tema para aplicar
  
    Object.keys(themeColors).map(function(key) {
      html.style.setProperty(`--${key}`, themeColors[key]); // Altera as variáveis no css
    });
  
    localStorage.setItem('theme', newTheme); //Salva o tema escolhido no localStorage
  }

  const theme = localStorage.getItem('theme');
if( theme ) {
  setTheme(theme)
}