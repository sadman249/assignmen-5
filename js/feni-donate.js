document.getElementById('feni-btn-add-money').addEventListener('click', function() {
    const donationAmount = document.getElementById('feni-input-add-money').value;
    
    // Check if the input is a valid number and greater than 0
    if (donationAmount && !isNaN(donationAmount) && Number(donationAmount) > 0) {
        // Update account balance (optional)
        const currentBalance = parseFloat(document.getElementById('feni-account-balance').innerText);
        document.getElementById('feni-account-balance').innerText = (currentBalance + parseFloat(donationAmount)).toFixed(2);

        // Show success message in popup
        document.getElementById('popup-message').innerText = `Successfully`;
    } else {
        // Show error message in popup
        document.getElementById('popup-message').innerText = 'Please enter a valid donation amount.';
    }

    // Show the popup
    document.getElementById('donation-popup').classList.remove('hidden');
});

// Close popup event
document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('donation-popup').classList.add('hidden');
});