const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');

router.get('/verify-token', authenticateToken, (req, res) => {
  res.status(200).json({ valid: true, user: req.user });
});

module.exports = router;
