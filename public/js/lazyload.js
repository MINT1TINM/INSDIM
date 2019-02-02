const isElementInViewport = el => {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight ||
        document.documentElement.clientHeight) /*or $(window).height() */ &&
    rect.right <=
      (window.innerWidth ||
        document.documentElement.clientWidth) /*or $(window).width() */
  );
};

function preLoad(url) {
  var img = new Image();
  img.src;
}

var gallery = document.getElementsByTagName("img");
for (let index = 0; index < gallery.length; index++) {
  if (isElementInViewport(gallery[index])) {
    console.log(index);
  }
}
