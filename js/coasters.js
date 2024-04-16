// Array of fun facts
const funFacts = [
  "Cedar Point is the second-oldest operating amusement park in the United States.",
  "The park features a world-record 71 rides, including 17 roller coasters.",
  "Cedar Point's Top Thrill Dragster was once the tallest and fastest roller coaster in the world.",
  "The Millennium Force roller coaster reaches a maximum speed of 93 mph.",
  "Cedar Point's GateKeeper roller coaster has a record-breaking wing span of 170 feet.",
];

// Get the fun fact container element
const funFactContainer = document.getElementById('funFactContainer');

// Function to display a random fun fact
function displayFunFact() {
  const randomIndex = Math.floor(Math.random() * funFacts.length);
  const funFact = funFacts[randomIndex];
  funFactContainer.textContent = funFact;
}

// Display a random fun fact on page load
displayFunFact();