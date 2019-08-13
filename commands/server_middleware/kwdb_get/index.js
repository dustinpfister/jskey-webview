// just get the keyword database
let fs = require('fs'),
path = require('path'),
express = require('express'),
router = new express.Router();

router.use(require('body-parser').json());

module.exports = function(){
    
    router.get('/', (req, res, next) => {
        
        let dbName = req.query.dbName || 'db';
        let dir_target = req.app.get('dir_target'),
        path_kwdb = path.join(dir_target, '_kwdb', dbName + '.json');
            
        fs.readFile(path_kwdb, 'utf8', (e, data ) => {
            
            let db = JSON.parse(data);
            
            res.send({db:db});
            
        });  
            
            
            
    });

    // return the router to be used
    // in main server.js file
    return router;
    
};

