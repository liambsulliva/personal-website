let darkMode = localStorage.getItem('darkMode'); //mutable
const darkModeToggle = document.querySelector('#dark-mode-toggle');
const darkModeImage = document.querySelector('#dark-mode-image');

// check if darkmode is enabled
// flip states

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkMode', 'disabled');
};

if(darkMode === 'enabled'){
    enableDarkMode();
    darkModeImage.src = 'Images/sun.svg';
}

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if(darkMode !== 'enabled'){
        enableDarkMode();
        darkMode = 'enabled';
        darkModeImage.src = 'Images/sun.svg';
    } else {
        disableDarkMode();
        darkMode = 'disabled';
        darkModeImage.src = 'Images/moon.svg';
    }
})