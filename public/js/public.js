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
  var foldGroup = folder.nextSibling;
  var toggle = folder.firstElementChild;
  if (folder.hasAttribute("status")) {
    folder.removeAttribute("status");
    foldGroup.style.height = "0";
    foldGroup.style.opacity = "0";
    foldGroup.style.pointerEvents = "none";
    toggle.setAttribute("class", "iconfont icon-arrow_d");
  } else {
    folder.setAttribute("status", "open");
    foldGroup.style.height = "100%";
    foldGroup.style.opacity = "1";
    foldGroup.style.pointerEvents = "auto";
    toggle.setAttribute("class", "iconfont icon-arrow_u");
  }
}

function detectDevice() {
  const isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i) ? true : false;
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i) ? true : false;
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i) ? true : false;
    },
    any: function() {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Windows()
      );
    }
  };
  if (isMobile.any()) {
    const device = "mobile";
    return device;
  } else {
    const device = "desktop";
    return device;
  }
}

const getMainRoute = (() => {
  var currentRoute = window.location.pathname.split("/")[1];
  var subLinks = document.getElementById("collection-sub");
  if (currentRoute) {
    var currentA = document.getElementById(currentRoute);
  } else {
    var currentA = document.getElementById("news");
  }
  if (currentRoute == "collection" || detectDevice() == "mobile") {
    subLinks.style.display = "block";
  } else {
    subLinks.style.display = "none";
  }
  currentA.style.backgroundColor = "rgb(20,20,20)";
  currentA.style.color = "#fff";
})();

const getSubRoute = (() => {
  var currentSubRoute = window.location.pathname.split("/")[2];
  if (currentSubRoute) {
    var subLinks = document.getElementById(currentSubRoute);
    subLinks.style.backgroundColor = "rgb(20,20,20)";
    subLinks.style.color = "#fff";
  }
})();
