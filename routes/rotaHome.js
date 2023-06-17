const express = require('express');
const router = express.Router();

//rota home
router.get(['/', '/home'], (req, res) => {
  res.render('pages/home');
});

module.exports = router;
