document.addEventListener('DOMContentLoaded', function () {
    getCatFact();
  });
  
  // Event listener for "Get New Fact" button
  document.getElementById('newFactButton').addEventListener('click', function () {
    getCatFact();
  });
// Function to fetch a random cat fact from the Cat Facts API
function getCatFact() {
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then(data => {
        const catFactElement = document.getElementById('catFact');
        catFactElement.textContent = data.fact;
      })
      .catch(error => {
        console.error('Error fetching cat fact:', error);
      });
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
      commentInput.value = '';
    }
  }