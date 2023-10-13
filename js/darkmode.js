let darkMode = localStorage.getItem('darkMode'); //mutable
const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeImage = document.getElementById('dark-mode-image');
const darkModeIcon1 = document.getElementById('dark-mode-icon1');
const darkModeIcon2 = document.getElementById('dark-mode-icon2');

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
    darkModeIcon1.src = 'Images/icon1-dark.svg';
    darkModeIcon2.src = 'Images/icon2-dark.svg';
}

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if(darkMode !== 'enabled'){
        enableDarkMode();
        darkMode = 'enabled';
        darkModeImage.src = 'Images/sun.svg';
        darkModeIcon1.src = 'Images/icon1-dark.svg';
        darkModeIcon2.src = 'Images/icon2-dark.svg';
    } else {
        disableDarkMode();
        darkMode = 'disabled';
        darkModeImage.src = 'Images/moon.svg';
        darkModeIcon1.src = 'Images/icon1.svg';
        darkModeIcon2.src = 'Images/icon2.svg';
    }
})