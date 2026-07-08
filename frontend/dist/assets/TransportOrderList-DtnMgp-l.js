import { l as v } from "./transportOrderService-B9WvGMoF.js";
import {
  d as y,
  r as u,
  o as f,
  c as s,
  a as t,
  b as g,
  e as b,
  w as h,
  f as k,
  g as N,
  t as a,
  F as c,
  h as p,
  i as r,
  n as C,
  _ as O,
} from "./index-TaKgwE5S.js";
const x = { class: "card" },
  T = { class: "header-action" },
  L = { key: 0, class: "error-banner" },
  V = { key: 1, class: "table-container" },
  w = { class: "font-medium" },
  B = { class: "waypoints-badges" },
  D = { key: 2, class: "empty-state" },
  E = { key: 3, class: "loading-state" },
  F = y({
    __name: "TransportOrderList",
    setup(z) {
      const o = u([]),
        i = u(!0),
        d = u(null);
      return (
        f(async () => {
          try {
            o.value = await v();
          } catch {
            d.value =
              "Error fetching transport orders. Please try again later.";
          } finally {
            i.value = !1;
          }
        }),
        (_, e) => {
          const m = N("router-link");
          return (
            r(),
            s("div", x, [
              t("div", T, [
                e[1] || (e[1] = t("h2", null, "Transport Orders", -1)),
                b(
                  m,
                  { to: "/create", class: "btn-primary" },
                  { default: h(() => e[0] || (e[0] = [k("New Order")])), _: 1 },
                ),
              ]),
              d.value ? (r(), s("div", L, a(d.value), 1)) : g("", !0),
              o.value.length > 0
                ? (r(),
                  s("div", V, [
                    t("table", null, [
                      e[2] ||
                        (e[2] = t(
                          "thead",
                          null,
                          [
                            t("tr", null, [
                              t("th", null, "Order Number"),
                              t("th", null, "Customer Name"),
                              t("th", null, "Date"),
                              t("th", null, "Waypoints"),
                            ]),
                          ],
                          -1,
                        )),
                      t("tbody", null, [
                        (r(!0),
                        s(
                          c,
                          null,
                          p(
                            o.value,
                            (n) => (
                              r(),
                              s("tr", { key: n.id }, [
                                t("td", w, a(n.order_number), 1),
                                t("td", null, a(n.customer_name), 1),
                                t("td", null, a(n.date), 1),
                                t("td", null, [
                                  t("div", B, [
                                    (r(!0),
                                    s(
                                      c,
                                      null,
                                      p(
                                        n.waypoints,
                                        (l) => (
                                          r(),
                                          s(
                                            "span",
                                            {
                                              key: l.id,
                                              class: C(["badge", l.type]),
                                            },
                                            a(l.location) +
                                              " (" +
                                              a(l.type) +
                                              ") ",
                                            3,
                                          )
                                        ),
                                      ),
                                      128,
                                    )),
                                  ]),
                                ]),
                              ])
                            ),
                          ),
                          128,
                        )),
                      ]),
                    ]),
                  ]))
                : i.value
                  ? (r(),
                    s(
                      "div",
                      E,
                      e[4] || (e[4] = [t("p", null, "Loading...", -1)]),
                    ))
                  : (r(),
                    s(
                      "div",
                      D,
                      e[3] ||
                        (e[3] = [
                          t(
                            "p",
                            null,
                            "No orders found. Create one to get started.",
                            -1,
                          ),
                        ]),
                    )),
            ])
          );
        }
      );
    },
  }),
  P = O(F, [["__scopeId", "data-v-b35d8a4f"]]);
export { P as default };
