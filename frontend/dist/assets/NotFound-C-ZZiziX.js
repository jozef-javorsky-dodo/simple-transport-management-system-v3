import {
  _ as n,
  g as r,
  c as s,
  i as a,
  a as o,
  e as d,
  w as l,
  f as c,
} from "./index-CwF_B8Yi.js";
const i = {},
  u = { class: "card not-found-container" };
function p(_, e) {
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
        { default: l(() => e[0] || (e[0] = [c("Return to Orders")])), _: 1 },
      ),
    ])
  );
}
const m = n(i, [
  ["render", p],
  ["__scopeId", "data-v-ec8239cd"],
]);
export { m as default };
