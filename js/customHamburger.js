const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  const ariaExpanded = hamburger.getAttribute("aria-expanded");

  ariaExpanded === "false"
    ? hamburger.setAttribute("aria-expanded", "true")
    : hamburger.setAttribute("aria-expanded", "false");
});
