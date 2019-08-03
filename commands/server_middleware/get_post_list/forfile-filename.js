// simple forFile script for jskey-walk
// that just prints the fileName for
// each file found
module.exports = (item, next) =>{
    console.log(item.fileName);
    next();
};
