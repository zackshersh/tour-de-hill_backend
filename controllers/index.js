const router = require('express').Router();
const path = require('path');

const Competitor = require('../models/Competitor')



router.get('/', (req,res) => {
    console.log('yes')
    res.sendFile(path.join(__dirname,'./yeah.html'))
})

router.post('/api/signup', async (req, res) => {
    try {
        const compData = await Competitor.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            own_bike: req.body.own_bike
        });

        res.status(200).json(compData)
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router;