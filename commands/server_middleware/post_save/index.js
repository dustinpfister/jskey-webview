// Save a post
let spawn = require('child_process').spawn,
fs = require('fs'),
path = require('path'),
express = require('express'),
router = new express.Router();


module.exports = function(key){

    // options
    key = key || {};
    key.password = key.password || ''; // the password to be used with jskey-crypt
    key.random = key.random || ''; // the salt value to be used with jskey-crypt
    
    router.post('/', (req, res) => {
        
        // state
        let state = {
            key : key,
            dir_target : req.app.get('dir_target')
        };
        state.dir_posts_crypt = path.join(state.dir_target, '_posts_crypt')
    
        res.json(state);
    
    });

    // return the router to be used
    // in main server.js file
    return router;
    
};

