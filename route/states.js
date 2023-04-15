const express = require('express');
const router = express.Router();

const {getAllstates} = require('../controller/states')

router.route("/").get(getAllstates);

module.exports = router;