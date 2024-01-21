document.addEventListener('DOMContentLoaded', function() {
  // Initial load
  getRandomCatFact();

  // Event listener for the "Get Another Fact" button
  document.getElementById('getFactBtn').addEventListener('click', getRandomCatFact);

  // Additional event listeners can be added as needed
});

// Function to fetch a random cat fact from the API
function getRandomCatFact() {
  const catFactElement = document.getElementById('catFact');
  
  // Fetching data from a public Cat Facts API (replace with your desired API)
  fetch('https://meowfacts.herokuapp.com/')
    .then(response => response.json())
    .then(data => {
      // Update the card with the new cat fact
      catFactElement.textContent = data.fact;
    })
    .catch(error => {
      console.error('Error fetching cat fact:', error);
      catFactElement.textContent = 'Error fetching cat fact. Please try again.';
    });
}