document.addEventListener("click", (event) => {
  const btn = event.target.closest("#menu-btn");
  const nav = document.getElementById("menu");

  if (btn) {
    btn.classList.toggle("open");
    nav.classList.toggle("flex");
    nav.classList.toggle("hidden");
  }
});
