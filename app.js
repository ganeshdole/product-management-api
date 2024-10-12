const express = require("express");
const sequelize = require("./config/database");
const productRoutes = require("./routes/products");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/products", productRoutes);

sequelize.sync().then(() => {
  console.log("Database Connected");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
