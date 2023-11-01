const expess = require('express');

const router = expess.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Hello Shopee!'
  })
})

module.exports = router;