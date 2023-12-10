const darkModeToggle = document.getElementById('dark-mode-toggle');
const footer = document.getElementById('footer');
const cards = document.querySelectorAll('.card');

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.innerHTML = '🌜';

        cards.forEach(card => {
            card.style.color = 'black'
        })
    } else {
        darkModeToggle.innerHTML = '🌞';

    }
}
