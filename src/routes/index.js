const expess = require('express');

const router = expess.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Hello World!'
  })
})
router.use('/shopee', require('./shopee'));

module.exports = router;