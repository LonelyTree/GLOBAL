require ('../db/db')
const express=require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require("bcrypt");



router.post('/',async (req,res) => {
  try {
    if(req.body.regusername) {
      req.body.username=req.body.regusername
      req.body.password=req.body.regpassword

      req.body.password=bcrypt.hashSync(req.body.password,bcrypt.genSaltSync(10));
      const alive = await User.findOne({ username: req.body.username })
        if (alive) {
          res.json({
            status: 200,
            data: 'username taken'
            })
        }

      const user = await User.create(req.body);

      req.session.logged = true;
      req.session.userId = user._id
      req.session.username = user.username;
      res.json({
        status: 200,
        data: 'LOGIN SUCCESSFUL'
      });
    }else{


    const online=await User.find({username: req.body.username})
    if(online.length > 0) {
      req.session.logged=true;
      // bcrypt.compareSync(
      //   req.body.password,
      //   online.password)
      req.session.userId=online[0]._id
      req.session.username=online[0].username;
      res.json({
        status: 200,
        data: 'LOGIN SUCCESSFUL'
      })
    }
    else {
    res.json({
        status: 200,
        data: 'Please make an account to login.'
      })
    }
    }
  } catch(err){
    console.log(err);
    res.send(err);
  }
});

router.delete('/',async (req,res) => {
try {
req.session.destroy((err) => {
        if (err) {
            res.json({
        status: 200,
        data: 'ISSUE LOGOUT'
      })
        } else {
            res.json({
        status: 200,
        data: 'LOGOUT SUCCESSFUL'
      })
        }
    })
} catch (e) {
console.log(e)
}
})













module.exports = router;