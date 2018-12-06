(function() {
    'use strict';
    var routes = function(express) {
        var router = express.Router();
        // register routing/controller files
        var routes = require('../routes'),
        index = require('../routes/index');
           
        // ================ Routes ========================
        router.post('/flaconiService/createCategory',index.createCategory);
        router.get('/flaconiService/findCategoryById/:categoryId',index.findCategoryById);
        router.get('/flaconiService/findCategoriesByParentCategory/:parentCategory',index.findCategoriesByParentCategory);
        router.post('/flaconiService/updateVisiblity/:categoryId',index.updateVisiblity);
        router.get('/flaconiService/findCategoryBySlug/:slug',index.findCategoryBySlug);
        return router;
    };
    module.exports = routes;
}());
