const router = require('express').Router();
const { createUser, login, signout } = require('../controllers/users');
// const { createUserVal, loginVal } = require('../middlewares/validationJoi');
const tokenAuth = require('../middlewares/auth');

router.post(
  '/signup',
  createUser,
);

router.post(
  '/signin',
  login,
);

router.post(
  '/signout',
  tokenAuth,
  signout,
);

module.exports = router;
