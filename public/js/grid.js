const hover = (() => {
  var gridItem = document.getElementsByClassName("grid-wrapper");
  gridItem[0].addEventListener("mouseover", event => {
    const currentNode = event.target.parentNode.lastChild;
    if (currentNode.className === "grid-title") {
      currentNode.style.opacity = "1";
    }
  });
  gridItem[0].addEventListener("mouseout", event => {
    const currentNode = event.target.parentNode.lastChild;
    if (currentNode.className === "grid-title") {
      currentNode.style.opacity = "0";
    }
  });
})();
