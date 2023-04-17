const Models = require("../database/models/india");
const getAllstates = async(req, res) => {

   const myData = await Models.find({Capital:"Bengaluru"});
        

    res.status(200).json({myData});
}

module.exports = {getAllstates};