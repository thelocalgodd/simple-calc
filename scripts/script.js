const lightMode = '/styles/light-mode.css';
const darkMode = '/styles/dark-mode.css';
const darkModeIcon = '/assets/SunIcon.svg';
const lightModeIcon = '/assets/MoonIcon.svg';
const GitHubDarkModeIcon = '/assets/GitHubDark.svg'
const GitHubLightModeIcon = '/assets/GitHubLight.svg'
const themeIcon = document.getElementById('theme-icon');
const results = document.getElementById('result');
const header = document.getElementById('header-text');

function calculate(value) {
    const calculatedValue = eval(value || null);
    if (isNaN(calculatedValue)) {
        results.value = 'Cannot divide by 0';
        setTimeout(() => {
            results.value = '';
        }, 1300)
    } else {
        results.value = calculatedValue;
    }
}

function changeTheme() {
    const theme = document.getElementById('theme')

    if (theme.getAttribute('href') === lightMode) {
        theme.setAttribute('href', darkMode);
        themeIcon.setAttribute('src', lightModeIcon);
    } else {
        theme.setAttribute('href', lightMode);
        themeIcon.setAttribute('src', darkModeIcon)
    }
}

function display(enteredValue) {
    if(!results.value) {
        results.value = '';
    }
    results.value += enteredValue;
}

document.addEventListener('keydown', keyboardInputHandler);

function keyboardInputHandler(e) {
    e.preventDefault();

    if (e.key === '0') {
        results.value +='0';
    } else if (e.key === '1') {
        results.value +='1'
    } else if (e.key === '2') {
        results.value +='2'
    } else if (e.key === '3') {
        results.value +='3'
    } else if (e.key === '4') {
        results.value +='4'
    } else if (e.key === '5') {
        results.value +='5'
    } else if (e.key === '6') {
        results.value +='6'
    } else if (e.key === '7') {
        results.value +='7'
    } else if (e.key === '8') {
        results.value +='8'
    } else if (e.key === '9') {
        results.value +='9'
    }

    if (e.key === '+') {
        results.value += '+';
    } else if (e.key === '-') {
        results.value += '-'
    } else if (e.key === '/') {
        results.value += '/'
    } else if (e.key === '*') {
        results.value += '*'
    }

    if (e.key === '.') {
        results.value += '.'
    }

    if (e.key === 'Backspace') {
        const resultInput = results.value
        results.value = resultInput.substring(0, results.value.length - 1)
    }

    if (e.key === 'Enter') {
        calculate(results.value);
    }
}