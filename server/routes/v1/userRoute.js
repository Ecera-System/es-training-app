const express = require('express');
const router = express.Router();
const adminAuthorize = require('../../middleware/adminAuthorize');
const userAuthorize = require('../../middleware/userAuthorize');
const { signup, activateAccount, resendCode, signin, getSingleUser, getAllStudents} = require('../../controllers/userController');

router.route('/sign-up').post(signup);
router.route('/activate-account').post(activateAccount);
router.route('/resend-code').post(resendCode);
router.route('/sign-in').post(signin);
router.route('/single').get(userAuthorize, getSingleUser);

// <!-- Admin Route -->
router.route('/').get(userAuthorize, adminAuthorize, getAllStudents);

module.exports = router;
