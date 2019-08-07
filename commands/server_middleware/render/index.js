// render views server side
let express = require('express'),
router = module.exports = new express.Router();

router.get('/edit', (req, res) => {
    res.render('index',{
        layout: 'edit'
    });
});

router.get('/', (req, res) => {
    res.render('index',{
        layout: 'root'
    });
});

