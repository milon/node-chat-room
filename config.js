var express = require('express');

/*
 * Configuration
 */
 
module.exports = function(app, swig){
    app.engine('html', swig.renderFile);

    app.set('view engine', 'html');
    app.set('views', __dirname + '/views');

    // express cache
    app.set('view cache', false);

    // swig cache
    swig.setDefaults({ cache: false });

    /*
     * Middlewares
     */
     // static resources
    app.use(express.static(__dirname + '/resources'));
};

