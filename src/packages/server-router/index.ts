declare module "bun" {
  interface FileSystemRouter {
    ctx: Set<{
      path: string;
      state?: Error | undefined;
    }>;
  }
}

function Route(context: { path: string; state?: Error }): {
  path: string;
} {
  return context;
}

export async function defineServerRoute({ path }: { path: string }) {
  const ssrRouter = (await import("@/src/server-entry")).fileSystem;
  try {
    const route = Route({ path });
    return ssrRouter.ctx.add(route);
  } catch (error) {
    const route = Route({
      path,
      state: error as Error,
    });
    return ssrRouter.ctx.add(route);
  }
}
