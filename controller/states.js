const getAllstates = async(req, res) => {
    res.status(200).json({msg:"I am all states"})
}

module.exports = {getAllstates};