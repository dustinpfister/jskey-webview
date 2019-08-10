// delete a post
let spawn = require('child_process').spawn,
fs = require('fs'),
path = require('path'),
express = require('express'),
router = new express.Router();

router.use(require('body-parser').json());

module.exports = function(){

    router.post('/', (req, res) => {
        let dir_target = req.app.get('target');
        let dir_posts_crypt = path.join(dir_target, '_posts_crypt');
        
        res.json({
            dir_posts_crypt: dir_posts_crypt
        });
         
    });

    // return the router to be used
    // in main server.js file
    return router;
    
};

