require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require("./database/connect")
const PORT = process.env.PORT ||3000;

const states_route = require("./route/states")

app.get("/", (req,res) => {
    res.send("hi i am alive");
});

//middelwares api
app.use("/data", states_route);

const start = async() =>{
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(PORT,() =>{
            console.log(`yes i am alive ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
};
 start();

 