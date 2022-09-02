const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouts = require("./routes/user");
const authRouts = require("./routes/auth");
const productRouts = require("./routes/product");
const cartRouts = require("./routes/cart");
const orderRouts = require("./routes/order");
const stripeRouts = require("./routes/stripe");
const cors =require("cors");
dotenv.config();
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("DB Connection Successful!!")

    })
    .catch((err) => {
        console.log(err)
    });
app.use(cors());
app.use(express.json());
app.use("/api/users", userRouts);
app.use("/api/auth", authRouts);
app.use("/api/products", productRouts);
app.use("/api/carts", cartRouts);
app.use("/api/orders", orderRouts);
app.use("/api/stripe", stripeRouts);
app.all("*",(req,res,next)=>{
    res.status(404).json({
        status:"false",
        message:"Page not found !"
    })
})
app.listen(process.env.PORT || 4000, () => {
    console.log("Backend is running!!!")
})
