const targetDate = new Date("December 29, 2025 03:35:00").getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const startBox = document.getElementById("startBox");

if (daysEl) {
  setInterval(() => {
    const now = Date.now();
    const diff = targetDate - now;

    if (diff <= 0) {
      document.getElementById("countdown").style.display = "none";
      startBox.classList.remove("hidden");
      return;
    }

    daysEl.textContent = Math.floor(diff / (1000 * 60 * 60 * 24));
    hoursEl.textContent = Math.floor((diff / (1000 * 60 * 60)) % 24);
    minutesEl.textContent = Math.floor((diff / (1000 * 60)) % 60);
    secondsEl.textContent = Math.floor((diff / 1000) % 60);
  }, 1000);
}

const visitCard = document.getElementById("visitCard");
const popup = document.getElementById("continuePopup");

if (visitCard) {
  visitCard.addEventListener("click", () => {
    popup.classList.add("show");
  });
}

function continueYes() {
  popup.querySelector("h2").textContent = "Thank you";
  popup.querySelector("p").textContent =
    "Some feelings are worth holding onto. I’m glad you chose to continue.";
  popup.querySelector(".continue-options").style.display = "none";
}

function continueNo() {
  popup.querySelector("h2").textContent = "I understand";
  popup.querySelector("p").textContent =
    "I’m sorry for everything that hurt you. Thank you for being honest.";
  popup.querySelector(".continue-options").style.display = "none";
}


