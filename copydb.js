require("dotenv").config();
const connectDB = require("./database/connect");
const Models = require("./database/models/india");

const Modelsjson = require("./copydb.json")

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URL);

        await Models.deleteMany;

        await Models.create(Modelsjson);

        console.log("success");
    } catch (error) {
        console.log(error);
    }
};

start();