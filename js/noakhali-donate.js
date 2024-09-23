// Select elements
const donationInput = document.getElementById('noakhali-input-add-money');
const donateButton = document.getElementById('noakhali-btn-add-money');
const balanceDisplay = document.getElementById('noakhali-account-balance');
const popup = document.getElementById('donation-popup');
const closePopupButton = document.getElementById('close-popup');
const popupMessage = document.getElementById('popup-message');

// Initialize account balance
let accountBalance = 0;

// Function to handle donation
donateButton.addEventListener('click', () => {
    const donationAmount = parseFloat(donationInput.value);

    // Validate donation amount
    if (isNaN(donationAmount) || donationAmount <= 0) {
        alert('Please enter a valid donation amount.');
        return;
    }

    // Update account balance
    accountBalance += donationAmount;
    balanceDisplay.textContent = accountBalance.toFixed(2); // Update balance display

    // Show popup message
    popupMessage.textContent = `Successfully`;
    popup.classList.remove('hidden');
    
    // Clear the input field
    donationInput.value = '';
});

// Close popup functionality
closePopupButton.addEventListener('click', () => {
    popup.classList.add('hidden');
});
