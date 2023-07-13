const button = document.createElement('button');
button.innerHTML = '<i class="fas fa-moon"></i>';
document.body.appendChild(button);

button.style.position = 'fixed';
button.style.bottom = '20px';
button.style.left = '20px';
button.style.zIndex = '9999';
button.style.width = '50px';
button.style.height = '50px';
button.style.borderRadius = '50%';
button.style.backgroundColor = '#357599';
button.style.display = 'flex';
button.style.justifyContent = 'center';
button.style.alignItems = 'center';
button.style.boxShadow = '0px 2px 5px rgba(0, 0, 0, 0.2)';
button.querySelector('i').style.fontSize = '24px';
button.querySelector('i').style.color = '#fff';

const waitForSections = () => {
  return new Promise(resolve => {
    const interval = setInterval(() => {
      const sections = document.querySelectorAll('section');
      if (sections.length > 0) {
        clearInterval(interval);
        resolve(sections);
      }
    }, 100);
  });
};

const toggleDarkMode = async (isInitialState = false) => {
  const sections = await waitForSections();
  sections.forEach(section => {
    section.classList.toggle('dark-mode');
  });
  if (button.querySelector('i').classList.contains('fa-moon')) {
    button.querySelector('i').classList.remove('fa-moon');
    button.querySelector('i').classList.add('fa-sun');
  } else {
    button.querySelector('i').classList.remove('fa-sun');
    button.querySelector('i').classList.add('fa-moon');
  }
  // Verifica se pelo menos um elemento 'section' contém a classe 'dark-mode'
  const isDarkModeOn = Array.from(sections).some(
    section => section.classList.contains('dark-mode')
  );
  if (isDarkModeOn) {
    button.querySelector('i').style.color = '#fafafa';
    if (!isInitialState) {
      localStorage.setItem('darkMode', 'true');
    }
  } else {
    button.querySelector('i').style.color = '#fff';
    if (!isInitialState) {
      localStorage.setItem('darkMode', 'false');
    }
  }
};

button.addEventListener('click', () => toggleDarkMode());

const style = document.createElement('style');
style.textContent = `
  .dark-mode {
    background-color: #1a1a1a;
    color: #fafafa;
  }

  .dark-mode button {
    background-color: #1a1a1a;
    color: #fafafa;
  }

  .dark-mode button:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
`;
document.head.appendChild(style);

// Verifica se o estado do modo escuro está salvo no LocalStorage e aplica-o
const darkModeState = localStorage.getItem('darkMode');
if (darkModeState === 'true') {
  toggleDarkMode(true);
}