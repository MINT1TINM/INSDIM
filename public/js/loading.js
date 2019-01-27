// loading animation
const load = (() => {
  if (document.body) {
    setInterval(() => {
      document.getElementById("loader").style.opacity = "0";
    }, 500);
  }
})();
