const getLocale = req => {
  const cookies = req.headers.cookie;
  let ca = cookies.split("; ");
  let name = "locale=";
  let full = ca[1].length;
  let locale = ca[1].substring(name.length, full);
  return locale;
};
export { getLocale };
