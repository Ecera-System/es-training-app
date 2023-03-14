const express = require('express');
const router = express.Router();
const { getProfile, updateProfileById } = require('../../controllers/profileController');
const userAuthorize = require('../../middleware/userAuthorize');

router.route('/').get(userAuthorize, getProfile);

router.route('/:id').patch(userAuthorize, updateProfileById);

module.exports = router;
