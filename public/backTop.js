const backTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backTop.classList.remove("hidden");
    backTop.classList.add("opacity-100");
  } else {
    backTop.classList.add("hidden");
    backTop.classList.remove("opacity-100");
  }
});

backTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
