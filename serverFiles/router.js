var router = require('express').Router();
var cms = require('cmstyx');

var config = require('../serverFiles/config.js');

router.get('/', function (req, res){
    var currentUser = req.user;
    var info = {
        title           : config.site.title,
        titleMessage    : config.site.bannerMessage,
        onlineUsers     : false,
        user            : currentUser,
        menu            : true
    };

    cms.render('index', req, res, info);
});

module.exports = router;
