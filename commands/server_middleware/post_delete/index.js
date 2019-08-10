// delete a post
let spawn = require('child_process').spawn,
fs = require('fs'),
path = require('path'),
express = require('express'),
router = new express.Router();

router.use(require('body-parser').json());

module.exports = function(){

    
    
    router.post('/', (req, res) => {
        let dir_target = req.app.get('dir_target');
        let dir_posts_crypt = path.join(dir_target, '_posts_crypt');
        let fileName = path.join(dir_posts_crypt, req.body.fileName);
        
        
        res.json({
            fileName: fileName
        });
         
    });

    // return the router to be used
    // in main server.js file
    return router;
    
};

