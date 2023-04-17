const Models = require("../database/models/india");
const getAllstates = async(req, res) => {
    const {Capital, State, ChiefMinister, select} = req.query;
    const queryobject = {};

    if(Capital){
        queryobject.Capital = Capital;
    
    }

    if(State){
        queryobject.State = {$regex:State,$option:"i"};
        
    }

    if(ChiefMinister){
        queryobject.ChiefMinister = ChiefMinister;
       
    }

    let apiData = Models.find(queryobject)

    if(select){
        let selectfix = select.replace(","," ");
        apiData = apiData.select(selectfix);
    
    }
    console.log(queryobject);


   const myData = await apiData;
        

    res.status(200).json({myData});
}

module.exports = {getAllstates};