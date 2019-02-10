const isElementInViewport = el => {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= -1 &&
    rect.bottom <=
      (window.innerHeight + 200 ||
        document.documentElement.clientHeight + 200) /*or $(window).height() */
  );
};

const showPic = pic => {
  pic.src = pic.getAttribute("data-src");
};

const lazyLoad = gallery => {
  for (let index = 0; index < gallery.length; index++) {
    if (isElementInViewport(gallery[index])) {
      showPic(gallery[index]);
      gallery[index].setAttribute("class", "gallery-pic lazy-n");
    }
  }
};

const throttle = (fn, delay, atleast) => {
  var timer = null;
  var previous = null;
  return function() {
    var now = +new Date();
    if (!previous) previous = now;
    if (now - previous > atleast) {
      fn();
      // 重置上一次开始时间为本次结束时间
      previous = now;
    } else {
      clearTimeout(timer);
      timer = setTimeout(function() {
        fn();
      }, delay);
    }
  };
};

var gallery = document.getElementsByClassName("lazy");

window.onload = lazyLoad(gallery);

window.onscroll = throttle(function() {
  lazyLoad(gallery);
}, 100);
