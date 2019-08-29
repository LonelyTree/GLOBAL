const express = require('express');
const router = express.Router();
const User=require('../models/user');


router.get('/:item',async (req,res,next) => {

    try {
        curid = req.params.item
        curid = curid.replace(/\s/g,'');
        const findOwner=await User.findById({_id: req.session.userId}).lean()
        openBackpack=findOwner.backpack[curid]
        res.json({
        status: 200,
        data: openBackpack
        });
    } catch (err){
        res.send(err);
    }
});

router.post('/:item/:new',async (req,res,next) => {

    try  {
        const findOwner = await User.findById({_id:req.params.id})
        const openBackpack = findOwner.backpack.req.params.item.push([req.params.new])
        res.json({
        status: 200,
        data: openBackpack
        });
    } catch (err){
        res.send(err);
    }
});

router.post('/coordinates/:lat/:lon',async (req,res,next) => {

    try {
        const findOwner= await User.findById({_id: req.session.userId})
        findOwner.backpack.coordinates.push({lat: req.params.lat,lon: req.params.lon})
        await findOwner.save()
        console.log(findOwner)
        res.json({
        status: 200,
        data: findOwner.backpack.coordinates
        });
    } catch (err){
        res.send(err);
    }
});

router.put('/:item/:slot', async (req, res) => {

    try {
        const placeIn=await User.findById({_id: req.params.id});
        placeIn.backpack.req.params.item[req.params.slot] = req.body
        res.json({
        status: 200,
        data: placeIn
        });
    } catch(err){
        res.send(err)
    }
    });

router.delete('/:item/:slot', async (req, res) => {

    try {
        const throwOut=await User.findById({_id:req.params.id},req.params.item[req.params.slot]);
        res.json({
            status: 200,
            data: throwOut
        });
    } catch(err){
        res.send(err);
    }
});



module.exports = router;