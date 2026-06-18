export const collections = [
  {
    id: "auth",
    name: "Authentication",
    requests: [
      { id: "login", type: "POST", name: "Login API", path: "/auth/login" },
      { id: "profile", type: "GET", name: "Get Profile", path: "/auth/me" },
      { id: "events", type: "WS", name: "Auth Events", path: "/auth/events" },
    ],
  },
  {
    id: "products",
    name: "Products",
    requests: [
      { id: "list-products", type: "GET", name: "List Products", path: "/products" },
      { id: "create-product", type: "POST", name: "Create Product", path: "/products" },
      { id: "product-schema", type: "GQL", name: "Product Schema", path: "query Product" },
    ],
  },
  {
    id: "orders",
    name: "Orders",
    requests: [
      { id: "list-orders", type: "GET", name: "List Orders", path: "/orders" },
      { id: "update-order", type: "PUT", name: "Update Order", path: "/orders/:id" },
      { id: "cancel-order", type: "DELETE", name: "Cancel Order", path: "/orders/:id" },
    ],
  },
];