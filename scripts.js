// script.js

function addComment() {
    const commentInput = document.getElementById("commentInput");
    const commentList = document.getElementById("commentList");
  
    if (commentInput.value.trim()) {
      const commentItem = document.createElement("li");
      commentItem.textContent = commentInput.value;
      commentList.appendChild(commentItem);
      commentInput.value = ""; // Clear the input field
    }
  }
  