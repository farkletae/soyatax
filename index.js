// Add hover event listener to boxes
$('.box').hover(function () {
  // Get the video element within the box
  var video = $(this).find('.video')[0];
  // Play the video
  video.play();
}, function () {
  // Get the video element within the box
  var video = $(this).find('.video')[0];
  // Pause the video
  video.pause();
});

function updateCountdown() {
  var targetDate = new Date("2023-04-24T00:00:00Z"); // Change this to your target date and time
  var currentDate = new Date();
  var timeDifference = targetDate - currentDate;

  if (timeDifference <= -1000) {
    var text = "Happy Birthday Siya!";
    var fonts = ["Abril Fatface", "Dancing Script", "Great Vibes", "Rubik Pixels", "Inspiration", "Amatic SC", "Playfair Display SC", "Cinzel Decorative", "Rock Salt", "Syncopate", "Nabla", "Henny Penny", "Comforter Brush"];
    var randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    document.getElementById("countdown").innerHTML = "<span style='font-family: " + randomFont + "'>" + text + "</span>";
    return;
  }

  var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = padZero(days);
  document.getElementById("hours").innerText = padZero(hours);
  document.getElementById("minutes").innerText = padZero(minutes);
  document.getElementById("seconds").innerText = padZero(seconds);

  // Change font every second
  var fonts = ["Abril Fatface", "Dancing Script", "Great Vibes", "Rubik Pixels", "Inspiration", "Amatic SC", "Playfair Display SC", "Cinzel Decorative", "Rock Salt", "Syncopate", "Nabla", "Henny Penny", "Comforter Brush"];
  var randomFont = fonts[Math.floor(Math.random() * fonts.length)];
  document.getElementById("countdown").style.fontFamily = randomFont;

  setTimeout(updateCountdown, 1000);
}

function padZero(num) {
  return String(num).padStart(2, '0');
}

// Start the countdown
updateCountdown();