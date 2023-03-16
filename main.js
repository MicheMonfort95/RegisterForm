const form = document.querySelector("form");
const submitButton = document.querySelector(".open-button");
const modal = document.querySelector("#modal");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  // Check if all required fields have a value
  const requiredFields = form.querySelectorAll("[required]");
  let allFieldsFilled = true;
  requiredFields.forEach((field) => {
    if (!field.value) {
      allFieldsFilled = false;
    }
  });

  if (allFieldsFilled) {
    modal.showModal();
  } else {
    alert("Please fill in all required fields.");
  }
});

// Close modal when close button is clicked
const closeButton = document.querySelector(".close-button");
closeButton.addEventListener("click", () => {
  modal.close();
});
