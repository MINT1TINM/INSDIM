const getCookie = (cookie, cname) => {
  var name = cname + "=";
  var ca = cookie.split(";");
  for (var i = 1; i < ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return "";
};

const getLocale = req => {
  const cookies = req.headers.cookie;
  let ca = cookies.split("; ");
  let c = ca[2].trim();
  let name = "locale=";

  // let locale = ca[2].substring(name.length, c.length);
  // console.log(locale);
  return ca;
};
export { getLocale };
