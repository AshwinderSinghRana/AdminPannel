const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const dbconn = require("./DbConn");
const userRouter = require("./Routes/userRoute");
const productRouter = require("./Routes/productRoutes");
const categoryRouter = require("./Routes/categoryRoutes");
const subCategoryRouter = require("./Routes/subCategoryRoutes");
const adminRouter = require("./Routes/adminRoutes");
const sellerRouter = require("./Routes/sellerRoutes");
const authRouter = require("./Routes/authRoute");
const authMiddle = require("./Middleware/authMiddleware");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
dbconn();
app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/category", categoryRouter);
app.use("/subCategory", subCategoryRouter);
app.use("/admin", adminRouter);
app.use("/seller", authMiddle, sellerRouter);
app.use("/auth", authRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Running on ${port}`);
});
