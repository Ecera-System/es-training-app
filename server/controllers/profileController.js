const Jimp = require("jimp");
const path = require("path");
const Profile = require("../models/Profile");
const User = require("../models/User");

exports.getProfile = async (req, res, next) => {
    try {
        const { _id } = req.decoded;
        const result = await Profile.findOne({ userId: _id }).populate('userId');
        result && res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};


exports.updateProfileById = async (req, res, next) => {
    try {
        if (req.body.update === 'info') {
            const { name, contactNumber, birthday, avatar } = req.body;

            let imagePath;

            // <!-- Image processing -->
            if (avatar && avatar.startsWith('data:image')) {
                const buffer = Buffer.from(
                    avatar.replace(/^data:image\/(png|jpg|jpeg);base64,/, ""),
                    "base64"
                );

                imagePath = `${Date.now()}-${Math.round(Math.random() * 1e9)}.png`;
                try {
                    const cachedJpegDecoder = Jimp.decoders['image/jpeg']
                    Jimp.decoders['image/jpeg'] = (data) => {
                        const userOpts = { maxMemoryUsageInMB: 1024 }
                        return cachedJpegDecoder(data, userOpts)
                    }
                    const jimpResp = await Jimp.read(buffer);
                    jimpResp.resize(300, Jimp.AUTO)
                        .write(
                            path.resolve(__dirname, `../public/images/profile/${imagePath}`)
                        );
                } catch (err) {
                    return res.status(500).json({ error: err.message });
                }
            };

            const result = await Profile.findByIdAndUpdate(
                { _id: req.params.id },
                {
                    $set: {
                        name,
                        birthday,
                        avatar: imagePath ? `/images/profile/${imagePath}` : avatar,
                    }
                }
            );

            if (!result) return res.status(404).json({ error: "Profile not found!" });

            await User.updateOne(
                { _id: req.decoded._id },
                { $set: { name: name, contactNumber: contactNumber } }
            );

            res.status(200).json({ success: "Profile update successfully!", data: result });
        };

        if (req.body.update === 'address') {
            const { country, city, address1, zip } = req.body;

            const result = await Profile.findByIdAndUpdate(
                { _id: req.params.id },
                {
                    $set: {
                        country,
                        city,
                        address1,
                        zip
                    }
                }
            );

            if (!result) return res.status(404).json({ error: "Profile not found!" });

            res.status(200).json({ success: "Address update successfully!", data: result });
        }
    } catch (error) {
        next(error);
    }
}