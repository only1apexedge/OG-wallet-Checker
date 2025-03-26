const OG_DATA = [
    "0xYourOGAddress1",
    "0xYourOGAddress2",
    // Add more addresses as needed
];

function checkOG() {
    const wallet = document.getElementById("ogWalletInput").value.trim();
    const ogMessageEl = document.getElementById("ogMessage");

    // Clear any previous message
    ogMessageEl.innerText = "";

    if (!wallet || wallet.length < 10) {
        ogMessageEl.innerText = "⚠ Invalid wallet format. Try again.";
        ogMessageEl.style.color = "red";
        return;
    }

    ogMessageEl.innerText = "⏳ Checking...";
    ogMessageEl.style.color = "blue";

    // Simulate a check delay
    setTimeout(() => {
        const normalizedOGData = OG_DATA.map(addr => addr.toLowerCase());
        if (normalizedOGData.includes(wallet.toLowerCase())) {
            ogMessageEl.innerText = "✅ Your wallet is OG !";
            ogMessageEl.style.color = "green";
        } else {
            ogMessageEl.innerText = "❌ Your wallet is NOT OG.";
            ogMessageEl.style.color = "red";
        }
    }, 1500);
}
