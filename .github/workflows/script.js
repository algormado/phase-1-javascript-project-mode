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
// Event listener for "Like" button
document.getElementById('likeButton').addEventListener('click', function () {
    alert('Liked!');
  });
  // Event listener for "Add Comment" button
document.getElementById('commentButton').addEventListener('click', function () {
    addComment();
  });
  // Function to add a comment
function addComment() {
    const commentInput = document.getElementById('commentInput');
    const commentsList = document.getElementById('commentsList');
  
    if (commentInput.value.trim() !== '') {
      const commentItem = document.createElement('li');
      commentItem.textContent = commentInput.value;
      commentsList.appendChild(commentItem);
      commentInput.value = ''; // Clear the input field
    }
  }