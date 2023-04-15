const Models = require("../database/models/india");
const getAllstates = async(req, res) => {

   const myData = await Models.find(req.query);
   
   const {Capital, State} = req.query;
   const queryObject ={};

   if(Capital)
        queryObject.Capital = Capital;

        if(State)
        queryObject.State = State;

        console.log(queryObject);

    res.status(200).json({myData});
}

module.exports = {getAllstates};