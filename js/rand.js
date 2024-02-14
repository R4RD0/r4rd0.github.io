// Get all the elements by id
var movingText = document.querySelectorAll("#moving-text, #moving-text2, #moving-text3, #moving-text4");

// Loop through the elements
for (var j = 0; j < movingText.length; j++) {
  // Split the text into an array of words
  var words = movingText[j].innerHTML.split(",");

  // Loop through the array
  for (var i = 0; i < words.length; i++) {
    // Generate a random index
    var randomIndex = Math.floor(Math.random() * words.length);

    // Swap the words at i and randomIndex
    var temp = words[i];
    words[i] = words[randomIndex];
    words[randomIndex] = temp;
  }

  // Join the array back into a string
  var newText = words.join(",");

  // Set the new text to the element
  movingText[j].innerHTML = newText;
}
