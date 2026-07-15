import {
  d as k,
  c as p,
  i as d,
  a as t,
  j as m,
  v as f,
  k as V,
  _ as C,
  r as v,
  l as h,
  o as F,
  u as T,
  t as b,
  b as g,
  F as E,
  h as R,
  e as W,
  w as q,
  f as D,
  g as S,
  m as U,
  p as j,
  q as B,
} from "./index-CEoWwsqU.js";
import { g as M, u as P, c as A } from "./transportOrderService-BmWnquyd.js";
const I = { class: "waypoint-form" },
  L = { class: "input-group flex-1" },
  z = { class: "input-group" },
  G = k({
    __name: "WaypointForm",
    props: { waypoint: {} },
    emits: ["remove"],
    setup(O) {
      return (l, a) => (
        d(),
        p("div", I, [
          t("div", L, [
            m(
              t(
                "input",
                {
                  type: "text",
                  id: "location",
                  "onUpdate:modelValue":
                    a[0] || (a[0] = (r) => (l.waypoint.location = r)),
                  placeholder: "Address or Location",
                  required: "",
                  class: "full-width",
                },
                null,
                512,
              ),
              [[f, l.waypoint.location]],
            ),
          ]),
          t("div", z, [
            m(
              t(
                "select",
                {
                  id: "type",
                  "onUpdate:modelValue":
                    a[1] || (a[1] = (r) => (l.waypoint.type = r)),
                },
                a[3] ||
                  (a[3] = [
                    t("option", { value: "pickup" }, "Pickup", -1),
                    t("option", { value: "delivery" }, "Delivery", -1),
                  ]),
                512,
              ),
              [[V, l.waypoint.type]],
            ),
          ]),
          t(
            "button",
            {
              type: "button",
              class: "btn-icon",
              onClick: a[2] || (a[2] = (r) => l.$emit("remove")),
              title: "Remove Waypoint",
            },
            " ✕ ",
          ),
        ])
      );
    },
  }),
  H = C(G, [["__scopeId", "data-v-f79c3cad"]]),
  J = { class: "card max-w-lg" },
  K = { class: "form-group" },
  Q = { class: "form-group" },
  X = { class: "form-group" },
  Y = { class: "waypoints-section" },
  Z = { class: "waypoints-list" },
  ee = { key: 0, class: "text-muted" },
  te = { key: 0, class: "error-text" },
  oe = { class: "form-actions" },
  re = ["disabled"],
  ae = k({
    __name: "TransportOrderForm",
    setup(O) {
      const l = j(),
        a = T(),
        r = v(null),
        c = v(!1),
        _ = v(!1),
        u = v(!1),
        o = h({ order_number: "", customer_name: "", date: "", waypoints: [] });
      F(async () => {
        const n = a.params.id;
        if (n) {
          ((u.value = !0), (_.value = !0));
          try {
            const e = await M(Number(n));
            ((o.order_number = e.order_number),
              (o.customer_name = e.customer_name),
              (o.date = e.date),
              (o.waypoints = e.waypoints.map((i) => ({
                location: i.location,
                type: i.type,
              }))));
          } catch (e) {
            ((r.value = "Failed to load order details."), console.error(e));
          } finally {
            _.value = !1;
          }
        }
      });
      const N = () => {
          o.waypoints.push({ location: "", type: "pickup" });
        },
        $ = (n) => {
          o.waypoints.splice(n, 1);
        },
        x = async () => {
          var n;
          if (o.waypoints.length === 0) {
            r.value = "Please add at least one waypoint.";
            return;
          }
          try {
            ((c.value = !0),
              (r.value = null),
              u.value ? await P(Number(a.params.id), o) : await A(o),
              l.push("/"));
          } catch (e) {
            const i = (n = e.response) == null ? void 0 : n.data;
            if (i && typeof i == "object") {
              const s = Object.entries(i)
                .map(([y, w]) => `${y}: ${w}`)
                .join(", ");
              r.value = `Error: ${s}`;
            } else r.value = "Error saving transport order. Please try again.";
            console.error("Error saving transport order:", e);
          } finally {
            c.value = !1;
          }
        };
      return (n, e) => {
        const i = S("router-link");
        return (
          d(),
          p("div", J, [
            t("h2", null, b(u.value ? "Edit Order" : "Create New Order"), 1),
            t(
              "form",
              { onSubmit: U(x, ["prevent"]), class: "form-layout" },
              [
                t("div", K, [
                  e[3] ||
                    (e[3] = t(
                      "label",
                      { for: "order-number" },
                      "Order Number",
                      -1,
                    )),
                  m(
                    t(
                      "input",
                      {
                        type: "text",
                        id: "order-number",
                        "onUpdate:modelValue":
                          e[0] || (e[0] = (s) => (o.order_number = s)),
                        placeholder: "e.g. ORD-001",
                        required: "",
                      },
                      null,
                      512,
                    ),
                    [[f, o.order_number]],
                  ),
                ]),
                t("div", Q, [
                  e[4] ||
                    (e[4] = t(
                      "label",
                      { for: "customer-name" },
                      "Customer Name",
                      -1,
                    )),
                  m(
                    t(
                      "input",
                      {
                        type: "text",
                        id: "customer-name",
                        "onUpdate:modelValue":
                          e[1] || (e[1] = (s) => (o.customer_name = s)),
                        placeholder: "e.g. Acme Corp",
                        required: "",
                      },
                      null,
                      512,
                    ),
                    [[f, o.customer_name]],
                  ),
                ]),
                t("div", X, [
                  e[5] || (e[5] = t("label", { for: "date" }, "Date", -1)),
                  m(
                    t(
                      "input",
                      {
                        type: "date",
                        id: "date",
                        "onUpdate:modelValue":
                          e[2] || (e[2] = (s) => (o.date = s)),
                        required: "",
                      },
                      null,
                      512,
                    ),
                    [[f, o.date]],
                  ),
                ]),
                t("div", Y, [
                  t("div", { class: "waypoints-header" }, [
                    e[6] || (e[6] = t("h3", null, "Waypoints", -1)),
                    t(
                      "button",
                      { type: "button", class: "btn-secondary", onClick: N },
                      " + Add ",
                    ),
                  ]),
                  t("div", Z, [
                    (d(!0),
                    p(
                      E,
                      null,
                      R(
                        o.waypoints,
                        (s, y) => (
                          d(),
                          B(
                            H,
                            { key: y, waypoint: s, onRemove: (w) => $(y) },
                            null,
                            8,
                            ["waypoint", "onRemove"],
                          )
                        ),
                      ),
                      128,
                    )),
                    o.waypoints.length === 0
                      ? (d(), p("p", ee, " No waypoints added yet. "))
                      : g("", !0),
                  ]),
                ]),
                r.value ? (d(), p("div", te, b(r.value), 1)) : g("", !0),
                t("div", oe, [
                  t(
                    "button",
                    {
                      type: "submit",
                      class: "btn-primary",
                      disabled: c.value || _.value,
                    },
                    b(
                      c.value
                        ? u.value
                          ? "Saving..."
                          : "Creating..."
                        : u.value
                          ? "Save Order"
                          : "Create Order",
                    ),
                    9,
                    re,
                  ),
                  W(
                    i,
                    { to: "/", class: "btn-text" },
                    { default: q(() => e[7] || (e[7] = [D("Cancel")])), _: 1 },
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
  ie = C(ae, [["__scopeId", "data-v-4af3c021"]]);
export { ie as default };
