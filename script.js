document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript Loaded");

  const countdownElement = document.getElementById("countdown");
  const nameInput = document.getElementById("nameInput");
  const startButton = document.getElementById("startButton");
  const messageElement = document.getElementById("message");

  console.log("Countdown Element:", countdownElement);
  console.log("Name Input:", nameInput);
  console.log("Start Button:", startButton);
  console.log("Message Element:", messageElement);

  if (!countdownElement || !nameInput || !startButton || !messageElement) {
      console.error("One or more elements are missing! Check your HTML.");
      return;
  }

  function updateCountdown() {
      const now = new Date();
      const birthday = new Date("2026-03-28T00:00:00");

      let timeDiff = birthday - now;

      if (timeDiff <= 0) {
          countdownElement.innerText = "It's your birthday! Enjoy your day!";
          clearInterval(countdownInterval);
          return;
      }

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      countdownElement.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s left until your birthday!`;
  }

  const countdownInterval = setInterval(updateCountdown, 1000);
  updateCountdown();

  startButton.addEventListener("click", function () {
      const name = nameInput.value.trim();
      if (name === "") {
          messageElement.innerText = "Please enter your name first";
          return;
      }
      confetti({
  particleCount: 150,
  spread: 90,
  origin: { y: 0.6 }
});

      const wishes = [
          "May this year bring you happiness and success!",
          "Wishing you lots of love and laughter on your birthday!",
          "Hope your special day is as wonderful as you are!",
          "May all your dreams come true this year!",
          "May your birthday be the start of a year filled with good luck, good health, and much happiness!",
          "Celebrate your personal new year today!",
          "May your birthday sparkle brighter than your cake candles!",
          "Wishing you a day as brilliant as your smile!",
          "Today's forecast: 100% chance of amazing birthday vibes!",
          "May your birthday be the plot twist your year needed!",
          "Your presence is a gift to the world—today we just get to wrap it in birthday joy. Shine on and stay amazing!",
          "Another year of being your awesome self! May this birthday bring you laughter, love, and the courage to chase your wildest dreams",
"On your special day, may your heart be light, your smile wide, and your cake extra sweet. The world is better with you in it!",
"Wishing you a birthday filled with endless moments of love, surprises around every corner, and memories you'll cherish forever.",
"Birthdays are bookmarks in the story of your life—here’s to another chapter of greatness, growth, and glowing happiness!",
"Forget the past, embrace the now, and look forward to the magic ahead. Happy birthday to someone truly unforgettable!",
"To the one who brings sunshine to cloudy days—may your birthday be as warm, bright, and beautiful as your soul.",
"Here’s to celebrating not just your age, but all the strength, kindness, and joy you bring into the world each day.",
"Wishing you a day that's as full of love and light as your smile—may all your wishes dance their way into reality.",
"Birthdays come and go, but people like you make life a celebration every single day. Have the most wonderful birthday!"
      ];

      const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
      messageElement.innerText = `Happy Birthday, ${name}! ${randomWish}`;
  });
});
document.addEventListener("mousemove", function(e) {
  const star = document.createElement("div");
  star.className = "star";
  star.style.left = e.pageX + "px";
  star.style.top = e.pageY + "px";
  document.body.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 600);
});
document.addEventListener("DOMContentLoaded",function(){
const modeToggle = document.getElementById("modeToggle");
document.getElementById("modeToggle");
modeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
});

