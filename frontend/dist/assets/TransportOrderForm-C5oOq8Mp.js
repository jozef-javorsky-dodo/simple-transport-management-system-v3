import {
  d as f,
  c as l,
  i,
  a as e,
  j as d,
  v as u,
  k as x,
  _,
  r as c,
  l as V,
  b as y,
  F as N,
  h as F,
  t as v,
  e as O,
  w as $,
  f as W,
  g as h,
  m as D,
  u as R,
  p as T,
} from "./index-CwF_B8Yi.js";
import { c as U } from "./transportOrderService-B9WvGMoF.js";
const q = { class: "waypoint-form" },
  B = { class: "input-group flex-1" },
  A = { class: "input-group" },
  E = f({
    __name: "WaypointForm",
    props: { waypoint: {} },
    emits: ["remove"],
    setup(w) {
      return (n, o) => (
        i(),
        l("div", q, [
          e("div", B, [
            d(
              e(
                "input",
                {
                  type: "text",
                  id: "location",
                  "onUpdate:modelValue":
                    o[0] || (o[0] = (s) => (n.waypoint.location = s)),
                  placeholder: "Address or Location",
                  required: "",
                  class: "full-width",
                },
                null,
                512,
              ),
              [[u, n.waypoint.location]],
            ),
          ]),
          e("div", A, [
            d(
              e(
                "select",
                {
                  id: "type",
                  "onUpdate:modelValue":
                    o[1] || (o[1] = (s) => (n.waypoint.type = s)),
                },
                o[3] ||
                  (o[3] = [
                    e("option", { value: "pickup" }, "Pickup", -1),
                    e("option", { value: "delivery" }, "Delivery", -1),
                  ]),
                512,
              ),
              [[x, n.waypoint.type]],
            ),
          ]),
          e(
            "button",
            {
              type: "button",
              class: "btn-icon",
              onClick: o[2] || (o[2] = (s) => n.$emit("remove")),
              title: "Remove Waypoint",
            },
            " ✕ ",
          ),
        ])
      );
    },
  }),
  M = _(E, [["__scopeId", "data-v-faea869d"]]),
  P = { class: "card max-w-lg" },
  S = { class: "form-group" },
  I = { class: "form-group" },
  L = { class: "form-group" },
  j = { class: "waypoints-section" },
  z = { class: "waypoints-list" },
  G = { key: 0, class: "text-muted" },
  H = { key: 0, class: "error-text" },
  J = { class: "form-actions" },
  K = ["disabled"],
  Q = f({
    __name: "TransportOrderForm",
    setup(w) {
      const n = R(),
        o = c(null),
        s = c(!1),
        r = V({ order_number: "", customer_name: "", date: "", waypoints: [] }),
        b = () => {
          r.waypoints.push({ location: "", type: "pickup" });
        },
        g = (p) => {
          r.waypoints.splice(p, 1);
        },
        k = async () => {
          if (r.waypoints.length === 0) {
            o.value = "Please add at least one waypoint.";
            return;
          }
          try {
            ((s.value = !0), (o.value = null), await U(r), n.push("/"));
          } catch (p) {
            ((o.value = "Error creating transport order. Please try again."),
              console.error("Error creating transport order:", p));
          } finally {
            s.value = !1;
          }
        };
      return (p, t) => {
        const C = h("router-link");
        return (
          i(),
          l("div", P, [
            t[8] || (t[8] = e("h2", null, "Create New Order", -1)),
            e(
              "form",
              { onSubmit: D(k, ["prevent"]), class: "form-layout" },
              [
                e("div", S, [
                  t[3] ||
                    (t[3] = e(
                      "label",
                      { for: "order-number" },
                      "Order Number",
                      -1,
                    )),
                  d(
                    e(
                      "input",
                      {
                        type: "text",
                        id: "order-number",
                        "onUpdate:modelValue":
                          t[0] || (t[0] = (a) => (r.order_number = a)),
                        placeholder: "e.g. ORD-001",
                        required: "",
                      },
                      null,
                      512,
                    ),
                    [[u, r.order_number]],
                  ),
                ]),
                e("div", I, [
                  t[4] ||
                    (t[4] = e(
                      "label",
                      { for: "customer-name" },
                      "Customer Name",
                      -1,
                    )),
                  d(
                    e(
                      "input",
                      {
                        type: "text",
                        id: "customer-name",
                        "onUpdate:modelValue":
                          t[1] || (t[1] = (a) => (r.customer_name = a)),
                        placeholder: "e.g. Acme Corp",
                        required: "",
                      },
                      null,
                      512,
                    ),
                    [[u, r.customer_name]],
                  ),
                ]),
                e("div", L, [
                  t[5] || (t[5] = e("label", { for: "date" }, "Date", -1)),
                  d(
                    e(
                      "input",
                      {
                        type: "date",
                        id: "date",
                        "onUpdate:modelValue":
                          t[2] || (t[2] = (a) => (r.date = a)),
                        required: "",
                      },
                      null,
                      512,
                    ),
                    [[u, r.date]],
                  ),
                ]),
                e("div", j, [
                  e("div", { class: "waypoints-header" }, [
                    t[6] || (t[6] = e("h3", null, "Waypoints", -1)),
                    e(
                      "button",
                      { type: "button", class: "btn-secondary", onClick: b },
                      "+ Add",
                    ),
                  ]),
                  e("div", z, [
                    (i(!0),
                    l(
                      N,
                      null,
                      F(
                        r.waypoints,
                        (a, m) => (
                          i(),
                          T(
                            M,
                            { key: m, waypoint: a, onRemove: (X) => g(m) },
                            null,
                            8,
                            ["waypoint", "onRemove"],
                          )
                        ),
                      ),
                      128,
                    )),
                    r.waypoints.length === 0
                      ? (i(), l("p", G, "No waypoints added yet."))
                      : y("", !0),
                  ]),
                ]),
                o.value ? (i(), l("div", H, v(o.value), 1)) : y("", !0),
                e("div", J, [
                  e(
                    "button",
                    { type: "submit", class: "btn-primary", disabled: s.value },
                    v(s.value ? "Creating..." : "Create Order"),
                    9,
                    K,
                  ),
                  O(
                    C,
                    { to: "/", class: "btn-text" },
                    { default: $(() => t[7] || (t[7] = [W("Cancel")])), _: 1 },
                  ),
                ]),
              ],
              32,
            ),
          ])
        );
      };
    },
  }),
  ee = _(Q, [["__scopeId", "data-v-d0c528c1"]]);
export { ee as default };
