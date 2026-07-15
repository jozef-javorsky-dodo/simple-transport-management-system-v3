import {
  _ as n,
  g as r,
  c as s,
  i as a,
  a as e,
  e as d,
  w as l,
  f as i,
} from "./index-CEoWwsqU.js";
const c = {},
  u = { class: "card not-found-container" };
function f(p, o) {
  const t = r("router-link");
  return (
    a(),
    s("div", u, [
      o[1] || (o[1] = e("h2", null, "404 - Page Not Found", -1)),
      o[2] ||
        (o[2] = e(
          "p",
          null,
          "Oops! The page you're looking for doesn't exist.",
          -1,
        )),
      d(
        t,
        { to: "/", class: "btn-primary mt-4 inline-block" },
        { default: l(() => o[0] || (o[0] = [i("Return to Orders")])), _: 1 },
      ),
    ])
  );
}
const m = n(c, [
  ["render", f],
  ["__scopeId", "data-v-f9bc1598"],
]);
export { m as default };
