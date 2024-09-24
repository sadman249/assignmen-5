
    document.addEventListener('DOMContentLoaded', () => {
        const balanceElement = document.getElementById('balance');
        const noakhaliAccountBalanceElement = document.getElementById('noakhali-account-balance');
        const noakhaliInput = document.getElementById('noakhali-input-add-money');
        const noakhaliButton = document.getElementById('noakhali-btn-add-money');
        const donationPopup = document.getElementById('donation-popup');
        const popupMessage = document.getElementById('popup-message');
        const closePopupButton = document.getElementById('close-popup');

        noakhaliButton.addEventListener('click', () => {
            const donationAmount = parseFloat(noakhaliInput.value);
            if (isNaN(donationAmount) || donationAmount <= 0) {
                alert('Please enter a valid donation amount.');
                return;
            }

            // Update the balances
            const currentBalance = parseFloat(balanceElement.textContent);
            const currentNoakhaliBalance = parseFloat(noakhaliAccountBalanceElement.textContent);

            balanceElement.textContent = (currentBalance - donationAmount).toFixed(2);
            noakhaliAccountBalanceElement.textContent = (currentNoakhaliBalance + donationAmount).toFixed(2);

            // Show the popup
            popupMessage.textContent = `Successfully`;
            donationPopup.classList.remove('hidden');

        });

        closePopupButton.addEventListener('click', () => {
            donationPopup.classList.add('hidden');
        });
        
        
    });

