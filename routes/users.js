const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { validationResult } = require('express-validator');
const { response } = require('express');
const jwt = require('jsonwebtoken')
const config = require('config')

//@route POST api/users
//@desc register a user 
// @access Public
router.post('/',

    async(req, res) => {

        const { username, email, password } = req.body
        try {

            //  console.log(username, email, password); 
            const errors = validationResult(req);
            // console.log("from new error log", errors);
            // console.log("errors is empty", errors.isEmpty());
            if (!errors.isEmpty()) {
                res.send({ msg: 'User already exists' });
            }
        } catch (err) {
            console.log(err);
        }

        // try {
        //     let user = await User.findOne({ email });

        //     if (user) {
        //         return res.send.json({ msg: 'User already exists' });
        //         //                 return res.status(400).json({ msg: 'User already exists' });
        //     }
        // }

        let createdUser;
        try {

            createdUser = new User({
                username,
                email,
                password,
            })


        } catch (err) {
            console.log("from new createdUse ", err);
        }


        try {
            await createdUser.save()

        } catch (err) {
            res.send({ msg: 'User already exists' });
            // console.log("from new createdUser", err.message)
        }

        res.json({ User: createdUser })

        // } catch (err) {
        //     console.log(err);
        // }
    }
)

module.exports = router;