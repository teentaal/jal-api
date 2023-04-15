const express = require('express');
const app = express();
const PORT = process.env.PORT ||3000;

const states_route = require("./route/states")

app.get("/", (req,res) => {
    res.send("hi i am alive");
});

app.use("/states", states_route);

const start = async() =>{
    try {
        app.listen(PORT,() =>{
            console.log(`yes i am alive ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
};
 start();

 