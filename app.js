const button = document.getElementById("demoBtn");
const status = document.getElementById("status");

button.addEventListener("click", () => {
  status.textContent = "Button works.";
});
