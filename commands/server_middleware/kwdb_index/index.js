// build index lists for posts and keywords
let spawn = require('child_process').spawn,
path = require('path'),
express = require('express'),
router = new express.Router();

router.use(require('body-parser').json());

module.exports = function(){
    
    router.get('/', (req, res, next) => {
        
        let dir_target = req.app.get('dir_target'),
        path_kwdb = path.join(dir_target, '_kwdb', req.body.dbName + '.json');
                
        res.resObj = {
            success : false,
            mess: 'default message',
            mode : req.query.m || 'post', // for a post or keyword
            post: req.query.p || false,
            keyword: req.query.k || false
        };
        
        
        res.json(res.resObj);
 
    });

    // return the router to be used
    // in main server.js file
    return router;
    
};

