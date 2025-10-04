// script.js

const form = document.getElementById("registrationForm");
const dobInput = document.getElementById("dob");
const dobError = document.getElementById("dobError");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevents the form from submitting normally

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const dob = dobInput.value;

  // Validate the date of birth
  if (!validateAge(dob)) {
    dobError.textContent = "You must be between 18 and 55 years old.";
    return; // Stop the form submission
  } else {
    dobError.textContent = "";
  }

  // Create an object to store user data
  const userData = {
    name: name,
    email: email,
    dob: dob,
  };

  // Save the data to local storage
  localStorage.setItem("registeredUser", JSON.stringify(userData));

  alert("Registration successful! Data saved locally.");

  // You can optionally clear the form after submission
  form.reset();
});

// Function to validate age between 18 and 55
function validateAge(dobString) {
  const today = new Date();
  const dob = new Date(dobString);
  const age = today.getFullYear() - dob.getFullYear();
  const monthDifference = today.getMonth() - dob.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < dob.getDate())
  ) {
    age--;
  }

  return age >= 18 && age <= 55;
}

// You can add more complex validations as needed.
