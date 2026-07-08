import {
  _ as n,
  g as r,
  c as s,
  i as a,
  a as o,
  e as d,
  w as l,
  f as i,
} from "./index-TaKgwE5S.js";
const c = {},
  u = { class: "card not-found-container" };
function f(p, e) {
  const t = r("router-link");
  return (
    a(),
    s("div", u, [
      e[1] || (e[1] = o("h2", null, "404 - Page Not Found", -1)),
      e[2] ||
        (e[2] = o(
          "p",
          null,
          "Oops! The page you're looking for doesn't exist.",
          -1,
        )),
      d(
        t,
        { to: "/", class: "btn-primary mt-4 inline-block" },
        { default: l(() => e[0] || (e[0] = [i("Return to Orders")])), _: 1 },
      ),
    ])
  );
}
const m = n(c, [
  ["render", f],
  ["__scopeId", "data-v-de2df127"],
]);
export { m as default };
