const cardDiv = document.querySelector(".card");

cardDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("titulo")) {
    console.log("click titulo");
  }
  if (e.target.classList.contains("precio")) {
    console.log("click precio");
  }
  if (e.target.classList.contains("card")) {
    console.log("click card");
  }
});
