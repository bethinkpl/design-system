const n = (e) => {
  for (var r = "", a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", h = a.length, t = 0; t < e; t++)
    r += a.charAt(Math.floor(Math.random() * h));
  return r;
};
export {
  n as randomString
};
//# sourceMappingURL=string.js.map
