
document.addEventListener("DOMContentLoaded", function () {
  // Find the button and the form section by ID
  var joinButton = document.querySelector(".join");
  var formSection = document.getElementById("form-section");

  // Add a click event listener to the button
  joinButton.addEventListener("click", function () {
    // Scroll to the form section smoothly
    formSection.scrollIntoView({ behavior: "smooth" });

    // Focus on the Name field
    var nameField = document.getElementById("exampleInputPassword1");
    if (nameField) {
      nameField.focus();
    }
  });
});