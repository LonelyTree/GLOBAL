const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', async (req, res, next) => {

    try  {
    const userInfo = await User.findById({_id: req.session.userId});
    res.json({
    status: 200,
    data: userInfo
    });

    } catch (err){
        res.send(err)
    }
});


router.put('/', async (req, res) => {

    try {
        const updatedUser = await User.findByIdAndUpdate(req.session.userId, req.body);
        res.json({
        status: 200,
        data: updatedUser
        });

    } catch(err){
        res.send(err);
    }
    });

router.delete('/user', async (req, res) => {

    try {
        const deletedUser = await User.findByIdAndRemove(req.session.userId);
        res.json({
            status: 200,
            data: deletedUser
        });
    } catch(err){
        res.send(err);
    }
});



module.exports = router;
