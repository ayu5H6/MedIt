import express from "express";
import medicine from "./routes/medicine.js";
import suggestion from "./routes/suggestion.js"
const port = process.env.PORT || 5000;
const app = express();

  app.use("/api/medicine/", medicine);
app.use("/api/suggestion/", suggestion);

app.listen(port, console.log(`app running on ${port}`));
