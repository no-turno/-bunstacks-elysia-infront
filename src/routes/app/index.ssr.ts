import { defineServerRoute } from "@/src/packages/server-router";

const route = await defineServerRoute({
  path: "/app",
});

export default route;
