document.getElementById("bookBtn").addEventListener("click", () => {
  document.getElementById("consult").scrollIntoView({
    behavior: "smooth"
  });
});

document.getElementById("consultForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();

  if (name === "") {
    alert("Please enter your name.");
    return;
  }

  const toast = document.getElementById("toast");
  toast.textContent = "Consultation submitted successfully!";
  toast.style.display = "block";

  setTimeout(() => {
    toast.style.display = "none";
  }, 3000);

  this.reset();
});
