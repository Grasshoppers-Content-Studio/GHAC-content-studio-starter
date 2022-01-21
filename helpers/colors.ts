import { theme } from "../pages/_app";

export const themeValueToHex = (val: any) => {
  return objByString(theme.colors, val);
};

const objByString = (o: any, s: string) => {
  s = s.replace(/\[(\w+)\]/g, ".$1");
  s = s.replace(/^\./, "");
  var a = s.split(".");
  for (var i = 0, n = a.length; i < n; ++i) {
    var k = a[i];
    if (k in o) {
      o = o[k];
    } else {
      return;
    }
  }
  return o;
};
