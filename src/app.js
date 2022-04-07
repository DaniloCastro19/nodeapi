//se establecen las direcciones de las funciones y configuraciones de la app
import express from "express";
import morgan from "morgan";

//Routes
import languageRoutes from "./routes/languages_routes";
const app = express();

//settings

app.set("port", 4012);
//Middlewares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/languages",languageRoutes);

export default app;