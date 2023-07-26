import mongoose from "../core/database/db.js";
import express from "express";
import routes from "../core/routes/routes.js"
const app=express();
app.use(express.json());
app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
});
app.use('/todo',routes);

