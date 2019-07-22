const getCookie = (cname, cookie) => {
  var name = cname + "=";
  var ca = cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return "";
};

const getLocale = req => {
  const cookie = req.headers.cookie;
  const locale = getCookie("locale", cookie);
  return locale;
};
export { getLocale };
