// Get the button
var scrollToTopBtn = document.getElementById("scrollToTopBtn");


// When the user clicks on the button, scroll to the top of the document
scrollToTopBtn.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
