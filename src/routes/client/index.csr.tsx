import { defineServerRoute } from "@/src/packages/server-router";

const route = await defineServerRoute({
  path: "/client",
});

export default route;
