// ... (dropd3ad) ...
// Function to update player count
function updatePlayerCount(count) {
    const playerCountElement = document.getElementById('current-player-count');
    playerCountElement.textContent = `Players: ${count}`;
}

// Simulated player count update (remove or comment out the fetch call)
setTimeout(() => {
    updatePlayerCount(100);
}, 3000); // Simulate API delay

// Function to handle Steam Charts link click
function handleSteamChartsClick() {
    window.open('https://steamcharts.com/app/221410', '_blank');
}
