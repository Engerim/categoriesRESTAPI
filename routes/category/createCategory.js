(function() {
    'use strict';
    const db = require('../../db.js'),
    logger = require('../../init/initLogger').initLogger(),
    HelperUtility = require('../../utils/HelperUtility');
  
    module.exports = function(req, res) {
        let category;
        return HelperUtility.doesSlugExists(req.body.slug)
        .then((exists)=>{
            if(exists){
                res.status(404).send(`Category with slug name ${req.body.slug} already exists. Please create category with different unique slug name`);
            } else if(!HelperUtility.isValidVisiblity(req.body.isVisible)) {
                res.status(404).send(`Invalid isVisible value provided. Please provide boolean values of true or false`);
            } else if(!HelperUtility.isValidSlugOrCategory(req.body.slug)){
                res.status(404).send(`Invalid slug or parentCategory name provided. Please provide valid slug name`);
            } else {
                return db.category.create({
                    name: req.body.name,
                    slug: req.body.slug,
                    isVisible: req.body.isVisible,
                    parentCategory: req.body.parentCategory
                  }).then(function(createdCategory) {
                      category = createdCategory;
                      res.status(200).send(`Category successfully created`);
                  }).catch(function(error) {
                      logger.error('Failed to create category: ' + error.stack);
                      res.status(500);
                  });
            }
        })
    };
  }());
  