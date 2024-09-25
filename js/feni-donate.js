
document.addEventListener('DOMContentLoaded', () => {
    const balanceElement = document.getElementById('balance');
    const feniAccountBalanceElement = document.getElementById('feni-account-balance');
    const feniInput = document.getElementById('feni-input-add-money');
    const feniButton = document.getElementById('feni-btn-add-money');
    const donationPopup = document.getElementById('donation-popup');
    const popupMessage = document.getElementById('popup-message');
    const closePopupButton = document.getElementById('close-popup');

    feniButton.addEventListener('click', () => {
        const donationAmount = parseFloat(feniInput.value);
        if (isNaN(donationAmount) || donationAmount <= 0) {
            alert('Please enter a valid donation amount.');
            return;
        }

        // Update the balances
        const currentBalance = parseFloat(balanceElement.textContent);
        const currentFeniBalance = parseFloat(feniAccountBalanceElement.textContent);

        balanceElement.textContent = (currentBalance - donationAmount).toFixed(2);
        feniAccountBalanceElement.textContent = (currentFeniBalance + donationAmount).toFixed(2);

        // Show the popup
        popupMessage.textContent = `Successfully`;
        donationPopup.classList.remove('hidden');
    });

    closePopupButton.addEventListener('click', () => {
        donationPopup.classList.add('hidden');
    });
});

// 
