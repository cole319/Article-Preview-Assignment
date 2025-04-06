let shareButton = document.getElementById("btn");
let tooltip = document.getElementById("tooltip");

// click button to toggle tooltip component

shareButton.addEventListener("click", function (event) {
  tooltip.style.opacity = 1;
  tooltip.style.visibility = "visible";
  event.stopPropagation();
});

// to close tooltip click anywhere except the tooltip itself

document.addEventListener("click", function (event) {
  if (event.target !== tooltip) {
    tooltip.style.opacity = 0;
    tooltip.style.visibility = "hidden";
  }
});
