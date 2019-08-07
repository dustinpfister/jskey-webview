// render views server side
let express = require('express'),
router = module.exports = new express.Router();

router.use((req, res, next)=>{
    
    res.viewLocals = {
      layout: 'root'  
    };
    next();
    
});

router.get('/edit', (req, res) => {
    res.viewLocals.layout = 'edit';
    res.render('index',res.viewLocals);
});

router.get('/', (req, res) => {
    res.render('index',res.viewLocals);
});

