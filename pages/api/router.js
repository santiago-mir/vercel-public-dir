import { router } from "micro-method-router";
import { meHandler } from "./handlers/me";

export default router({
  "/me": meHandler,
});
