// loading animation
const load = (() => {
  if (document.body) {
    setInterval(() => {
      document.getElementById("loader").style.background = "transparent";
      document.getElementById("spinner").style.opacity = "0";
    }, 500);
  }
})();
