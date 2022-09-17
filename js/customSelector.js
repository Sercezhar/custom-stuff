const selectBtn = document.querySelector(".select__input");
const options = document.querySelector(".options");
const optionsItems = document.querySelectorAll(".options__item");
const arrow = document.querySelector(".arrow-down");

document.addEventListener("click", handleOptionsVisibility);
optionsItems.forEach((item) => {
  item.addEventListener("click", () => handleOptionSelection(item));
});

function hideOptions() {
  options.classList.add("visually-hidden");
}

function handleOptionsVisibility(event) {
  if (event.target.matches(".select__input")) {
    options.classList.toggle("visually-hidden");
    arrow.classList.toggle("rotate");
  }

  if (!event.target.matches(".select__input")) {
    arrow.classList.remove("rotate");
    hideOptions();
  }
}

function handleOptionSelection(item) {
  selectBtn.value = item.getAttribute("name");
  hideOptions();
}
