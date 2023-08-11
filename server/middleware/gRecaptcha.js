
const reCaptchaVerify = async (req, res, next) => {
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.GOOGLE_RECAPTCHA_SECRET_KEY}&response=${req.body.captchaToken}`

    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.success) {
                next()
            } else {
                return res.status(500).json({ error: 'Failed to verify reCAPTCHA!' })
            }

        })
        .catch((error) => {
            return res.status(500).json({ error: error.message })
        })
};

module.exports = reCaptchaVerify;