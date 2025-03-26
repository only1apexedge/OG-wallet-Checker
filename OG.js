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
        ogMessageEl.innerText = "✅ Your wallet is OG !";
        ogMessageEl.style.color = "green";
    }, 1500);
}
