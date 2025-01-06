import { router } from "micro-method-router";
import { meHandler } from "../api/me";

export default router({
  "/me": meHandler,
});
