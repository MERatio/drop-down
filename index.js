function handleDocumentClick(e) {
  const activeDropDowns = document.querySelectorAll(".dropDown.active");
  const parentDropDown = e.target.closest(".dropDown");

  if (parentDropDown === null) {
    for (const activeDropDown of activeDropDowns) {
      activeDropDown.classList.remove("active");
    }
    return;
  }

  const isTargetDropDownToggle = e.target.matches(".dropDownToggle");
  if (!isTargetDropDownToggle) {
    return;
  }

  for (const activeDropDown of activeDropDowns) {
    if (activeDropDown === parentDropDown) {
      continue;
    }

    activeDropDown.classList.remove("active");
  }

  parentDropDown.classList.toggle("active");
}

document.addEventListener("click", handleDocumentClick);
