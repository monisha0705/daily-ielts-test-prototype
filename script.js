function goToScreen(screenNumber) {
  for (let i = 1; i <= 5; i++) {
    document.getElementById(`screen-${i}`).classList.add("hidden");
  }
  document.getElementById(`screen-${screenNumber}`).classList.remove("hidden");
}
