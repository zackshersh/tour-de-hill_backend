const router = require('express').Router();
const path = require('path');

const Competitor = require('../models/Competitor')

const timer = require('./timer')


router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'../public/index.html'))
})

router.get('/list', (req,res) => {
    res.sendFile(path.join(__dirname,'../public/list.html'))
})

router.get('/api/competitors', async (req,res) => {
    try {
        const allComps = await Competitor.findAll();

        res.status(200).json(allComps)
    } catch (err) {
        res.status(400).json(err)
    }
}) 

router.delete('/api/competitors', async (req,res) => {
    try {
        const compData = await Competitor.destroy({
            where: {},
        })

        res.status(200).json(compData)
    } catch (err){
        res.status(400).json(err)
    }
})

router.post('/api/competitor', async (req, res) => {
    console.log('|||||||||||')
    console.log(req.body)
    console.log('|||||||||||')


    try {
        const compData = await Competitor.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            own_bike: req.body.own_bike
        });
        console.log(compData)
        res.status(200).json(compData)
    } catch (err) {
        res.status(400).json(err)
    }
})



router.get('/api/race/startTime', async (req, res) => {
    try {
        console.log('-------')
        console.log('time started')
        console.log('-------')
        timer.start()
        res.status(200).json({result: true});
    } catch (err) {
        res.status(400).json(err);
    }
})

router.get('/api/race/resetTime', async (req, res) => {
    try {
        timer.reset()
        res.status(200).json({result: true});
    } catch (err) {
        res.status(400).json(err);
    }
})





module.exports = router;