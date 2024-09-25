
document.addEventListener("DOMContentLoaded", () => {
    const showHistoryButton = document.getElementById("show-transaction-history");
    const showDonationButton = document.getElementById("show-donate-money-form");
    const historySection = document.getElementById("history-section");
    const donationSection = document.querySelector("main > div"); // Assuming it's the first div under main
    const historyContainer = document.getElementById("history-container");

    // Array to store donation history
    let donationHistory = [];

    // Show donation form
    showDonationButton.addEventListener("click", () => {
        donationSection.classList.remove("hidden");
        historySection.classList.add("hidden");
    });

    // Show donation history
    showHistoryButton.addEventListener("click", () => {
        historySection.classList.remove("hidden");
        donationSection.classList.add("hidden");
        renderHistory();
    });

    // Function to add donation
    function addDonation(amount, location) {
        donationHistory.push({ amount, location, date: new Date().toLocaleString() });
        // Update the account balance (this is just a placeholder example)
        const accountBalanceElement = document.getElementById(`${location}-account-balance`);
        accountBalanceElement.textContent = parseInt(accountBalanceElement.textContent) + parseInt(amount);
        showConfirmationPopup(location);
    }

    // Function to show confirmation popup
    function showConfirmationPopup(location) {
        const popup = document.getElementById("donation-popup");
        const popupMessage = document.getElementById("popup-message");
        popupMessage.textContent = `You donated BDT ${amount} for ${location}`;
        popup.classList.remove("hidden");
        
        document.getElementById("close-popup").addEventListener("click", () => {
            popup.classList.add("hidden");
        });
    }

    // Function to render donation history
    function renderHistory() {
        historyContainer.innerHTML = "";
        donationHistory.forEach(donation => {
            const donationElement = document.createElement("div");
            donationElement.textContent = `Donated BDT ${donation.amount} for ${donation.location} Date : ${donation.date}`;
            historyContainer.appendChild(donationElement);
        });
    }

    // Donation buttons logic
    document.querySelectorAll("[id$='btn-add-money']").forEach(button => {
        button.addEventListener("click", (event) => {
            const inputField = event.target.previousElementSibling; // Assuming it's the input field before the button
            const amount = inputField.value;
            const location = event.target.id.split('-')[0]; // Extract location from button ID
            if (amount) {
                addDonation(amount, location);
                inputField.value = ""; // Clear input
            }
        });
    });
});
