import { l as m } from "./transportOrderService-B9WvGMoF.js";
import {
  d as f,
  r as u,
  o as y,
  c as e,
  a as t,
  b as v,
  t as n,
  F as c,
  e as p,
  f as r,
  _ as h,
} from "./index-C3XS7atM.js";
const k = { key: 0, class: "error" },
  g = { key: 1 },
  b = { key: 2 },
  N = { key: 3 },
  O = f({
    __name: "TransportOrderList",
    setup(L) {
      const s = u([]),
        d = u(!0),
        o = u(null);
      return (
        y(async () => {
          try {
            s.value = await m();
          } catch {
            o.value =
              "Error fetching transport orders. Please try again later.";
          } finally {
            d.value = !1;
          }
        }),
        (_, a) => (
          r(),
          e("div", null, [
            a[1] || (a[1] = t("h2", null, "Transport Orders", -1)),
            o.value ? (r(), e("div", k, n(o.value), 1)) : v("", !0),
            s.value.length > 0
              ? (r(),
                e("table", g, [
                  a[0] ||
                    (a[0] = t(
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
                    e(
                      c,
                      null,
                      p(
                        s.value,
                        (l) => (
                          r(),
                          e("tr", { key: l.id }, [
                            t("td", null, n(l.order_number), 1),
                            t("td", null, n(l.customer_name), 1),
                            t("td", null, n(l.date), 1),
                            t("td", null, [
                              t("ul", null, [
                                (r(!0),
                                e(
                                  c,
                                  null,
                                  p(
                                    l.waypoints,
                                    (i) => (
                                      r(),
                                      e("li", { key: i.id }, n(i.location), 1)
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
                ]))
              : d.value
                ? (r(), e("p", N, "Loading..."))
                : (r(), e("p", b, "No orders found.")),
          ])
        )
      );
    },
  }),
  B = h(O, [["__scopeId", "data-v-a18bca3f"]]);
export { B as default };
