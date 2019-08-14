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
                
            let resObj = {
                success : false,
                mess: 'default message'
            };
            
            res.json(resObj);
 
            
        }
    );

    // return the router to be used
    // in main server.js file
    return router;
    
};

