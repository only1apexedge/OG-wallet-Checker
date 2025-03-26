// Sample OG Whitelist (Stored in frontend)
const ogWhitelist = [
    "0x123456789abcdef123456789abcdef1234567890",
    "0xaabbccddeeff00112233445566778899aabbccdd",
    "0x5f4d3c2b1a9876543210fedcba9876543210abcd", 
    "0xabcdefabcdefabcdefabcdefabcdefabcdefabcd"
];

// Function to check wallet status
function checkWallet() {
    let input = document.getElementById("walletInput").value.trim();
    let resultBox = document.getElementById("result");

    // Clear previous result
    resultBox.innerHTML = "";

    // Validate input
    if (!input) {
        showMessage(resultBox, "Please enter a wallet address.", "warning");
        return;
    }

    // Convert input to lowercase for case-insensitive checking
    input = input.toLowerCase();

    // Check if the wallet is OG
    if (ogWhitelist.includes(input)) {
        showMessage(resultBox, "✅ Wallet is OG!", "success");
    } else {
        showMessage(resultBox, "❌ Wallet is NOT OG.", "error");
    }
}

// Function to display messages
function showMessage(element, message, type) {
    element.innerHTML = message;
    element.className = type;

    // Auto-hide message after 2 seconds
    setTimeout(() => {
        element.innerHTML = "";
    }, 2000);
}
