import express from "express"
const app = express();

// Routes Import
import { userRouter } from "./router/login.router.js";
// Router declaration
app.use("/api/v1/user", userRouter);

export {app}