// button colour

document.addEventListener('DOMContentLoaded', () => {
    const historyButton = document.getElementById('show-transaction-history');
    const donationButton = document.getElementById('show-donate-money-form');

    // Function to set button colors
    function setButtonColors(historyColor, donationColor) {
        historyButton.style.backgroundColor = historyColor;
        donationButton.style.backgroundColor = donationColor;
    }

    // Event listener for the History button
    historyButton.addEventListener('click', () => {
        setButtonColors('rgb(180, 244, 97)', 'white'); // History button green, Donation button white
    });

    // Event listener for the Donation button
    donationButton.addEventListener('click', () => {
        setButtonColors('white', 'rgb(180, 244, 97)'); // Donation button green, History button white
    });
});

