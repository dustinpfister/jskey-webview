// Just get a list of the posts
let spawn = require('child_process').spawn,
path = require('path'),
express = require('express'),
router = module.exports = new express.Router();

router.get('/', (req, res) => {
    
    let dir_target = req.app.get('dir_target'),
    dir_posts_crypt = path.join(dir_target, '_posts_crypt'),
    dir_forFile = path.join(__dirname, 'forfile-filename.js');
    
    let posts = spawn('jskey-walk', ['walk', '-t', dir_posts_crypt, '-s', dir_forFile]);
    
    //let out = '';
    let fileNames = [];
    posts.stdout.on('data', (data) => {
        //out += data.toString();
        fileNames.push(data.toString());
    });
    
    posts.on('close', (code) => {
        
        // res.send('_posts_crypt path: ' + dir_posts_crypt);
        res.json({
            dir_target: dir_target,
            dir_posts_crypt: dir_posts_crypt,
            dir_forFile: dir_forFile,
            fileNames : fileNames  
        });
      
    });
    
});

