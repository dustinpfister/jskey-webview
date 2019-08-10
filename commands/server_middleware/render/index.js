// render views server side
let express = require('express'),
router = module.exports = new express.Router();

// create object to be used when
// rendering a page server side
router.use((req, res, next)=>{
    
    res.viewLocals = {
      layout: 'root',
      version: req.app.get('jskey_version')
    };
    next();
    
});

// root view
router.get('/', (req, res) => {
    res.render('index',res.viewLocals);
});

// edit view
router.get('/edit', (req, res) => {
    res.viewLocals.layout = 'edit';
    res.render('index',res.viewLocals);
});

router.post('/edit', (req, res) => {
    res.json({mess:'ping'});
});

// key word database view
router.get('/kwdb', (req, res) => {
    res.viewLocals.layout = 'kwdb';
    res.render('index',res.viewLocals);
});
