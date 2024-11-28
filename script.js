// ... (dropd3ad) ...

document.addEventListener('DOMContentLoaded', () => {
    fetch('https://api.dayzmoddinghub.com/v1/mods')
        .then(response => response.json())
        .then(data => {
            const playerCountElement = document.getElementById('current-player-count');
            playerCountElement.textContent = `Players: ${data.current_players}`;
        })
        .catch(error => console.error('Error fetching data:', error));
});
