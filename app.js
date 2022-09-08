
const express = require("express");
require("dotenv").config();  
const router = require("./routes/routes");
require("./database/mongo")
const app = express();

app.use(express.json());
app.use(express.static("build")); 
 

app.use("/", router);

 
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

