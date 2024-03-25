
import { treaty } from "@elysiajs/eden";
import { main, type GyozaMainContext } from "./main";

declare namespace Gyoza {
  export type MainContext = GyozaMainContext;
}
declare let server: {
  readonly client: typeof gyoza;
};

declare let app: typeof server;

export const gyoza = treaty<Gyoza.MainContext>(main.listen(import.meta.env.PORT, c => {
    console.log(c.url.toString())
}));

globalThis.app = {
  get client() {
    return gyoza;
  },
};

declare namespace globalThis {
  export let app: typeof server;
}