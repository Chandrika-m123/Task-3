// Interactive Quiz Logic
let answers = [];

function nextQuestion(answer) {
  answers.push(answer);

  if (answers.length === 1) {
    document.getElementById('quiz').innerHTML = `
      <p>Question 2: Do you prefer analog or digital?</p>
      <button onclick="showResult('Analog')">Analog</button>
      <button onclick="showResult('Digital')">Digital</button>
    `;
  }
}

function showResult(answer) {
  answers.push(answer);
  const result = `You might like a ${answers[0]} ${answers[1]} watch!`;
  document.getElementById('quiz').innerHTML = `<h2>${result}</h2>`;
}

// Image Carousel Logic
const images = ['watch1.jpg', 'watch2.jpg', 'images/watch3.jpg'];
let currentIndex = 0;

function updateImage() {
  document.getElementById('carouselImage').src = images[currentIndex];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
}

function previousImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
}

// API Fetch Logic
function fetchWatchData() {
  fetch('data.json') // Replace with an actual watch API
    .then(response => response.json())
    .then(data => {
      document.getElementById('watchDetails').innerHTML = `
        <h3>Titan Analog Watch</h3>
        <p>"body": "A stylish analog watch with a leather strap.",
           "brand": "Titan",
           "price": "₹2999",
           "description": "A great watch for everyday use."</p>
        
      `;
    })
    .catch(error => console.error('Error fetching data:', error));
}
























