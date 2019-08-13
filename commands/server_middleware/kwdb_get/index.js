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
        
        let resObj = {
            success: true,
            mess:'',
            dbName: dbName,
            path_kwdb: path_kwdb,
            dir_target: dir_target,
            db: {}
        };
        
        fs.readFile(path_kwdb, 'utf8', (e, data ) => {
            
            if(e){
                resObj.success = false;
                resObj.mess = e.message;
            }else{
                try{
                    resObj.db = JSON.parse(data);
                }catch(e){
                    resObj.success = false;
                    resObj.mess = e.message;
                }
            }
            
            res.send(resObj);
            
        });  
            
            
            
    });

    // return the router to be used
    // in main server.js file
    return router;
    
};

