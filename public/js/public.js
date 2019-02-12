const fadeIn = element => {
  element.style.opacity = 1;
};

const fadeOut = element => {
  element.style.opacity = 0;
};

const openSidebar = () => {
  var sidebar = document.getElementById("sidebar");
  sidebar.style.width = "100%";
  sidebar.style.opacity = "0.97";
};

const closeSidebar = () => {
  var sidebar = document.getElementById("sidebar");
  sidebar.style.width = "0%";
  sidebar.style.opacity = "0";
};

window.onresize = resize;

function resize() {
  if (document.documentElement.clientWidth > 1000) {
    var sidebar = document.getElementById("sidebar");
    sidebar.style.width = "270px";
    sidebar.style.opacity = "1";
  }
}

function toggleFolder() {
  var folder = document.getElementById("folder");
  var foldGroup = document.getElementById("folder-sub");
  // var toggle = folder.firstElementChild;
  if (folder.hasAttribute("status")) {
    folder.removeAttribute("status");
    foldGroup.style.height = "0";
    foldGroup.style.opacity = "0";
    foldGroup.style.pointerEvents = "none";
    // toggle.setAttribute("class", "iconfont icon-arrow_d");
  } else {
    folder.setAttribute("status", "open");
    folder.style.backgroundColor = "transparent";
    folder.style.color = "#383838";
    foldGroup.style.height = "100%";
    foldGroup.style.opacity = "1";
    foldGroup.style.pointerEvents = "auto";
    // toggle.setAttribute("class", "iconfont icon-arrow_u");
  }
}

const getMainRoute = (() => {
  var currentRoute = window.location.pathname.split("/")[1];
  var subLinks = document.getElementById("folder-sub");
  if (currentRoute) {
    var currentA = document.getElementById(currentRoute);
  } else {
    var currentA = document.getElementById("news");
  }
  if (currentRoute == "collection") {
    var currentA = document.getElementById("folder");
    subLinks.style.display = "block";
    subLinks.style.opacity = "1";
  }
  currentA.style.backgroundColor = "rgb(20,20,20)";
  currentA.style.color = "#fff";
  currentA.style.pointerEvents = "none";
})();

const getSubRoute = (() => {
  var currentSubRoute = window.location.pathname.split("/")[2];
  if (currentSubRoute) {
    var subLinks = document.getElementById(currentSubRoute);
    subLinks.style.backgroundColor = "rgb(20,20,20)";
    subLinks.style.color = "#fff";
  }
})();
