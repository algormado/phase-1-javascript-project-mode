function getCatFact() {
  // API URL for Cat Facts
  var apiUrl = "https://catfact.ninja/fact";

  // Fetch cat fact from the API
  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          // Display the cat fact
          var factContainer = document.getElementById("fact-container");
          factContainer.innerHTML = "<p>" + data.fact + "</p>";
      })
      .catch(error => console.error('Error fetching cat fact:', error));
}