function handleDocumentClick(e) {
  const activeDropDowns = document.querySelectorAll("[data-drop-down].active");

  if (e.target.closest("[data-drop-down]") === null) {
    for (const activeDropDown of activeDropDowns) {
      activeDropDown.classList.remove("active");
    }
    return;
  }

  const isDropDownToggle = e.target.matches("[data-drop-down-toggle]");
  if (!isDropDownToggle) {
    return;
  }

  const currentActiveDropDown = e.target.closest("[data-drop-down]");
  for (const activeDropDown of activeDropDowns) {
    if (activeDropDown === currentActiveDropDown) {
      continue;
    }

    activeDropDown.classList.remove("active");
  }

  if (e.target.matches("[data-drop-down-toggle]")) {
    currentActiveDropDown.classList.toggle("active");
  }
}

document.addEventListener("click", handleDocumentClick);
