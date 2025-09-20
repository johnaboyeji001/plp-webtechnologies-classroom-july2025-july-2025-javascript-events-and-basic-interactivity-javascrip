/* ==========================
   1. LIGHT/DARK MODE TOGGLE
   ========================== */
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark")
    ? "Switch to Light Mode"
    : "Switch to Dark Mode";
});

/* ==========================
   2. PRODUCT COUNTER
   ========================== */
let stock = 50;
const productCount = document.getElementById("productCount");

document.getElementById("addStockBtn").addEventListener("click", () => {
  stock++;
  productCount.textContent = stock;
});

document.getElementById("sellStockBtn").addEventListener("click", () => {
  if (stock > 0) stock--;
  productCount.textContent = stock;
});

document.getElementById("resetStockBtn").addEventListener("click", () => {
  stock = 50;
  productCount.textContent = stock;
});

/* ==========================
   3. ORDER FORM VALIDATION
   ========================== */
const orderForm = document.getElementById("orderForm");

orderForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting

  // Inputs
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const product = document.getElementById("product").value;
  const quantity = document.getElementById("quantity").value.trim();

  // Error Elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const productError = document.getElementById("productError");
  const quantityError = document.getElementById("quantityError");
  const formSuccess = document.getElementById("formSuccess");

  // Reset messages
  [nameError, emailError, productError, quantityError].forEach(err => err.textContent = "");
  formSuccess.textContent = "";

  let valid = true;

  if (name === "") {
    nameError.textContent = "Full name is required.";
    valid = false;
  }

  const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Enter a valid email.";
    valid = false;
  }

  if (product === "") {
    productError.textContent = "Please select a product.";
    valid = false;
  }

  if (quantity === "" || isNaN(quantity) || quantity <= 0) {
    quantityError.textContent = "Enter a valid quantity.";
    valid = false;
  }

  if (valid) {
    formSuccess.textContent = ` Thank you, ${name}! Your ${product} order has been received.`;
    orderForm.reset();
  }
});
