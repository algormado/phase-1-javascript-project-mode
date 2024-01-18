// Sample cat facts 
document.addEventListener('DOMContentLoaded', function() {
    getRandomCatFact();
  });

  function getRandomCatFact(){}
    const catFactElement = document.getElementById('catFact');
    const getFactBtn = document.getElementById('getFactBtn');

    // Disable the button while fetching a new fact
    getFactBtn.disabled = true;

    // Fetching data from a public Cat Facts API (replace with your desired API)
    fetch('https://meowfacts.herokuapp.com/')
      .then(response => response.json())
      .then(data => {
        catFactElement.textContent = data.fact;
      })
      .catch(error => {
        console.error('Error fetching cat fact:', error);
        catFactElement.textContent = 'Error fetching cat fact. Please try again.';
      })
      .finally(() => {
        // Enable the button after fetching the fact
        getFactBtn.disabled = false;
      });