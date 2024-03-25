import { Elysia } from "elysia";

export const main = new Elysia()
	.decorate("routes", () => import("@/src/routes/index"))
	.get("*", async (c) =>
		c.routes().then((router) => {
			const routes = router.fileSystem.ctx.values();
			for (const route of routes) {
				if (route.path === c.path) {
					return route;
				}
			}

			return {
				status: 404,
			};
		}),
	);

export type GyozaMainContext = typeof main;
