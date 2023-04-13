const myButton = document.getElementById('mybtn');
const container = document.querySelector('.video');
const container1 = document.querySelector('.container1');
var video = document.getElementById('videoElement');

myButton.addEventListener('click', () => {
  container.classList.add('hide');
  setTimeout(() => {
    container1.style.display = 'block';
  }, 1000); // Delay the display of container1 by 1 second (1000 milliseconds)
  video.play();
});

video.addEventListener('ended', () => {
  // Redirect to another website
  window.location.href = 'https://farkletae.github.io/soyatax/index.html'; // Replace with the URL of the website you want to redirect to
});