import { l as h, d as k } from "./transportOrderService-BmWnquyd.js";
import {
  d as C,
  r as u,
  o as N,
  c as l,
  a as t,
  b as O,
  e as m,
  w as v,
  f as y,
  g as x,
  t as a,
  F as b,
  h as f,
  i as n,
  n as T,
  _ as w,
} from "./index-CEoWwsqU.js";
const D = { class: "card" },
  L = { class: "header-action" },
  V = { key: 0, class: "error-banner" },
  B = { key: 1, class: "table-container" },
  E = { class: "font-medium" },
  F = { class: "waypoints-badges" },
  A = { class: "actions" },
  I = ["onClick", "disabled"],
  P = { key: 2, class: "empty-state" },
  $ = { key: 3, class: "loading-state" },
  z = C({
    __name: "TransportOrderList",
    setup(M) {
      const r = u([]),
        _ = u(!0),
        c = u(null),
        i = u(null),
        g = async (o) => {
          if (confirm("Are you sure you want to delete this transport order?"))
            try {
              ((i.value = o),
                await k(o),
                (r.value = r.value.filter((e) => e.id !== o)));
            } catch (e) {
              (alert("Failed to delete order. Please try again."),
                console.error(e));
            } finally {
              i.value = null;
            }
        };
      return (
        N(async () => {
          try {
            r.value = await h();
          } catch {
            c.value =
              "Error fetching transport orders. Please try again later.";
          } finally {
            _.value = !1;
          }
        }),
        (o, e) => {
          const p = x("router-link");
          return (
            n(),
            l("div", D, [
              t("div", L, [
                e[1] || (e[1] = t("h2", null, "Transport Orders", -1)),
                m(
                  p,
                  { to: "/create", class: "btn-primary" },
                  { default: v(() => e[0] || (e[0] = [y("New Order")])), _: 1 },
                ),
              ]),
              c.value ? (n(), l("div", V, a(c.value), 1)) : O("", !0),
              r.value.length > 0
                ? (n(),
                  l("div", B, [
                    t("table", null, [
                      e[3] ||
                        (e[3] = t(
                          "thead",
                          null,
                          [
                            t("tr", null, [
                              t("th", null, "Order Number"),
                              t("th", null, "Customer Name"),
                              t("th", null, "Date"),
                              t("th", null, "Waypoints"),
                              t("th", null, "Actions"),
                            ]),
                          ],
                          -1,
                        )),
                      t("tbody", null, [
                        (n(!0),
                        l(
                          b,
                          null,
                          f(
                            r.value,
                            (s) => (
                              n(),
                              l("tr", { key: s.id }, [
                                t("td", E, a(s.order_number), 1),
                                t("td", null, a(s.customer_name), 1),
                                t("td", null, a(s.date), 1),
                                t("td", null, [
                                  t("div", F, [
                                    (n(!0),
                                    l(
                                      b,
                                      null,
                                      f(
                                        s.waypoints,
                                        (d) => (
                                          n(),
                                          l(
                                            "span",
                                            {
                                              key: d.id,
                                              class: T(["badge", d.type]),
                                            },
                                            a(d.location) +
                                              " (" +
                                              a(d.type) +
                                              ") ",
                                            3,
                                          )
                                        ),
                                      ),
                                      128,
                                    )),
                                  ]),
                                ]),
                                t("td", null, [
                                  t("div", A, [
                                    m(
                                      p,
                                      {
                                        to: `/edit/${s.id}`,
                                        class: "btn-text edit-btn",
                                      },
                                      {
                                        default: v(
                                          () => e[2] || (e[2] = [y("Edit")]),
                                        ),
                                        _: 2,
                                      },
                                      1032,
                                      ["to"],
                                    ),
                                    t(
                                      "button",
                                      {
                                        onClick: (d) => g(s.id),
                                        class: "btn-text delete-btn",
                                        disabled: i.value === s.id,
                                      },
                                      a(
                                        i.value === s.id
                                          ? "Deleting..."
                                          : "Delete",
                                      ),
                                      9,
                                      I,
                                    ),
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
                : _.value
                  ? (n(),
                    l(
                      "div",
                      $,
                      e[5] || (e[5] = [t("p", null, "Loading...", -1)]),
                    ))
                  : (n(),
                    l(
                      "div",
                      P,
                      e[4] ||
                        (e[4] = [
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
  j = w(z, [["__scopeId", "data-v-018b75b1"]]);
export { j as default };
