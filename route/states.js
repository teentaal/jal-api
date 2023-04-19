const express = require('express');
const router = express.Router();

const {getAlldata} = require('../controller/states')

router.route("/").get(getAlldata);

module.exports = router;