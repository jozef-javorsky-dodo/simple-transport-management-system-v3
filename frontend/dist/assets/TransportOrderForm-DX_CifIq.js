import {
  d as v,
  c as p,
  f as u,
  a as e,
  w as l,
  v as s,
  g,
  _ as f,
  r as y,
  h as V,
  F as W,
  e as C,
  i as O,
  u as T,
  j as U,
} from "./index-C3XS7atM.js";
import { c as q } from "./transportOrderService-B9WvGMoF.js";
const B = v({
    __name: "WaypointForm",
    props: { waypoint: {} },
    emits: ["remove"],
    setup(b, { emit: d }) {
      return (n, o) => (
        u(),
        p("div", null, [
          o[4] || (o[4] = e("label", { for: "location" }, "Location", -1)),
          l(
            e(
              "input",
              {
                type: "text",
                id: "location",
                "onUpdate:modelValue":
                  o[0] || (o[0] = (r) => (n.waypoint.location = r)),
                required: "",
              },
              null,
              512,
            ),
            [[s, n.waypoint.location]],
          ),
          o[5] || (o[5] = e("label", { for: "type" }, "Type", -1)),
          l(
            e(
              "select",
              {
                id: "type",
                "onUpdate:modelValue":
                  o[1] || (o[1] = (r) => (n.waypoint.type = r)),
              },
              o[3] ||
                (o[3] = [
                  e("option", { value: "Pickup" }, "Pickup", -1),
                  e("option", { value: "Delivery" }, "Delivery", -1),
                ]),
              512,
            ),
            [[g, n.waypoint.type]],
          ),
          e(
            "button",
            {
              type: "button",
              onClick: o[2] || (o[2] = (r) => n.$emit("remove")),
            },
            "Remove",
          ),
        ])
      );
    },
  }),
  D = f(B, [["__scopeId", "data-v-cc07ee71"]]),
  P = v({
    __name: "TransportOrderForm",
    setup(b) {
      const d = T(),
        n = y(null),
        o = y(!1),
        r = V({ order_number: "", customer_name: "", date: "", waypoints: [] }),
        w = () => {
          r.waypoints.push({ location: "", type: "Pickup" });
        },
        k = (i) => {
          r.waypoints.splice(i, 1);
        },
        F = async () => {
          try {
            ((o.value = !0), (n.value = null), await q(r), d.push("/"));
          } catch (i) {
            ((n.value = "Error creating transport order. Please try again."),
              console.error("Error creating transport order:", i));
          } finally {
            o.value = !1;
          }
        };
      return (i, t) => (
        u(),
        p(
          "form",
          { onSubmit: O(F, ["prevent"]) },
          [
            e("div", null, [
              t[3] ||
                (t[3] = e(
                  "label",
                  { for: "order-number" },
                  "Order Number",
                  -1,
                )),
              l(
                e(
                  "input",
                  {
                    type: "text",
                    id: "order-number",
                    "onUpdate:modelValue":
                      t[0] || (t[0] = (a) => (r.order_number = a)),
                    required: "",
                  },
                  null,
                  512,
                ),
                [[s, r.order_number]],
              ),
            ]),
            e("div", null, [
              t[4] ||
                (t[4] = e(
                  "label",
                  { for: "customer-name" },
                  "Customer Name",
                  -1,
                )),
              l(
                e(
                  "input",
                  {
                    type: "text",
                    id: "customer-name",
                    "onUpdate:modelValue":
                      t[1] || (t[1] = (a) => (r.customer_name = a)),
                    required: "",
                  },
                  null,
                  512,
                ),
                [[s, r.customer_name]],
              ),
            ]),
            e("div", null, [
              t[5] || (t[5] = e("label", { for: "date" }, "Date", -1)),
              l(
                e(
                  "input",
                  {
                    type: "date",
                    id: "date",
                    "onUpdate:modelValue": t[2] || (t[2] = (a) => (r.date = a)),
                    required: "",
                  },
                  null,
                  512,
                ),
                [[s, r.date]],
              ),
            ]),
            e("div", null, [
              t[6] || (t[6] = e("h2", null, "Waypoints", -1)),
              (u(!0),
              p(
                W,
                null,
                C(
                  r.waypoints,
                  (a, m) => (
                    u(),
                    U(
                      D,
                      { key: m, waypoint: a, onRemove: (R) => k(m) },
                      null,
                      8,
                      ["waypoint", "onRemove"],
                    )
                  ),
                ),
                128,
              )),
              e("button", { type: "button", onClick: w }, "Add Waypoint"),
            ]),
            t[7] ||
              (t[7] = e("button", { type: "submit" }, "Create Order", -1)),
          ],
          32,
        )
      );
    },
  }),
  M = f(P, [["__scopeId", "data-v-4f0def15"]]);
export { M as default };
