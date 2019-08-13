// add a keyword to a database
let spawn = require('child_process').spawn,
path = require('path'),
express = require('express'),
router = new express.Router();

router.use(require('body-parser').json());

module.exports = function(){
    
    router.post('/', (req, res, next) => {
        
            let dir_target = req.app.get('dir_target'),
            path_kwdb = path.join(dir_target, '_kwdb', req.body.dbName + '.json');
            
            let kwdb = spawn('jskey-kwdb', ['add', '-t', path_kwdb, '-k', req.body.keyword]);
             
            let resObj = {
                success: true,
                mess:''
            };
            kwdb.stderr.on('data', (data) => {
                console.log(data.toString());
            });
            
            // when done
            kwdb.on('close', ()=>{
                
                res.json(resObj);
 
            });
            
        }
    );

    // return the router to be used
    // in main server.js file
    return router;
    
};

