const list = document.querySelectorAll(".nav__item");
list.forEach((item) => {
  item.addEventListener("click", () => {
    list.forEach((item) => item.classList.remove("active"));
    item.classList.add("active");
  });
});



// Menu Button
// Handle voice input
const voiceBtn = document.getElementById('voiceBtn');
let recognition;

if ('webkitSpeechRecognition' in window) {
  recognition = new webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.lang = 'en-US';

  recognition.onstart = () => {
    voiceBtn.classList.add('listening');
  };

  recognition.onend = () => {
    voiceBtn.classList.remove('listening');
  };

  recognition.onresult = (event) => {
    document.getElementById('searchInput').value = event.results[0][0].transcript;
  };

  voiceBtn.addEventListener('click', () => recognition.start());
} else {
  voiceBtn.disabled = true;
}

// Handle search
function submitSearch() {
  const value = document.getElementById('searchInput').value;
  const output = document.getElementById('output');
  output.textContent = `You searched for: ${value}`;
  output.classList.remove('d-none');
}

// Preview image
document.getElementById('imageInput').addEventListener('change', function () {
  const file = this.files[0];
  const container = document.getElementById('imagePreviewContainer');

  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = function (e) {
      preview.src = e.target.result;
      container.classList.remove('d-none');
    };
    reader.readAsDataURL(file);
  } else {
    preview.src = '';
    container.classList.add('d-none');
  }
});
const menuCheckbox = document.getElementById('menuCheckbox');

menuCheckbox.addEventListener('change', () => {
  if (menuCheckbox.checked) {
    document.body.classList.add('menu-open');
  } else {
    document.body.classList.remove('menu-open');
  }
});

function placeOrder() {
  window.location.href = "address.html";
}
// slider start
window.addEventListener("DOMContentLoaded", () => {
  const images = [
    "./img/slider1.png",
    "./img/slider4.png",

  ];

  let current = 0;
  const sliderImage = document.getElementById("slider-image");
  const progressBar = document.getElementById("progress-bar");

  function changeImage() {
    current = (current + 1) % images.length;
    sliderImage.src = images[current];

    // Add fade-in class
    sliderImage.classList.remove("fade-in");
    void sliderImage.offsetWidth; // Force reflow
    sliderImage.classList.add("fade-in");

    // Restart progress bar animation
    progressBar.style.animation = "none";
    void progressBar.offsetWidth;
    progressBar.style.animation = "fillBar 2s linear";
  }

  // Initialize animation
  changeImage(); // Start once to initialize
  setInterval(changeImage, 2000);
});


// slider end