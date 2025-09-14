function copyToClipboard() {
    const email = "robincore333@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        showPopup("Vágólapra másolva!", "green");
    }).catch((err) => {
        console.error("Hiba a másolás során:", err);
    });
}

function showPopup(message, color = "red") {
    const popup = document.getElementById("popup");
    popup.textContent = message;
    popup.style.color = color;
    popup.style.opacity = "1";

    setTimeout(() => {
        popup.style.opacity = "0";
        popup.style.color = "red"; // reset to default after fade-out
    }, 2000);
}

// Vélemény beküldése popup
document.addEventListener("DOMContentLoaded", () => {
    const reviewForm = document.querySelector(".review_form");

    if (reviewForm) {
        reviewForm.addEventListener("submit", function (e) {
            e.preventDefault();
            showPopup("Köszönöm a véleményed!");
            reviewForm.reset();
        });
    }
});
