import express from "express";
import router from "./src/route/index.js";
import cookieParser from "cookie-parser";
const app = express();
app.use(express.json());

app.use(cookieParser());
app.use(router);

app.listen(5000, () => console.log("Server Running port:", 5000));
