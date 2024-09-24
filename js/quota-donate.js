
document.addEventListener('DOMContentLoaded', () => {
    const balanceElement = document.getElementById('balance');
    const quotaAccountBalanceElement = document.getElementById('quota-account-balance');
    const quotaInput = document.getElementById('quota-input-add-money');
    const quotaButton = document.getElementById('quota-btn-add-money');
    const donationPopup = document.getElementById('donation-popup');
    const popupMessage = document.getElementById('popup-message');
    const closePopupButton = document.getElementById('close-popup');

    quotaButton.addEventListener('click', () => {
        const donationAmount = parseFloat(quotaInput.value);
        if (isNaN(donationAmount) || donationAmount <= 0) {
            alert('Please enter a valid donation amount.');
            return;
        }

        // Update the balances
        const currentBalance = parseFloat(balanceElement.textContent);
        const currentQuotaBalance = parseFloat(quotaAccountBalanceElement.textContent);

        balanceElement.textContent = (currentBalance - donationAmount).toFixed(2);
        quotaAccountBalanceElement.textContent = (currentQuotaBalance + donationAmount).toFixed(2);

        // Show the popup
        popupMessage.textContent = `Successfully`;
        donationPopup.classList.remove('hidden');
    });

    closePopupButton.addEventListener('click', () => {
        donationPopup.classList.add('hidden');
    });
});

