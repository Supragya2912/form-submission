const User = require('../models/User');
const bcrypt = require('bcrypt');

const submitForm = async (req, res) => {

    try {
        const { emailId, password, phoneNumber, countryCode, firstName, lastName , address} = req.body;

        if (!emailId || !password || !phoneNumber || !countryCode || !firstName  || !address) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const existingUser = await User.findOne({phoneNumber});
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailId)) {
            return res.status(400).json({ message: 'Invalid email' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ emailId, password:hashedPassword, phoneNumber, countryCode, firstName, lastName , address});
        await user.save();

        res.status(201).json({ message: 'Success', data: user });

    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = { submitForm };