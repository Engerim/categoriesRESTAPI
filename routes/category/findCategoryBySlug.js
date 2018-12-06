(function() {
    'use strict';
    const db = require('../../db.js'),
    logger = require('../../init/initLogger').initLogger(),
    HelperUtility = require('../../utils/HelperUtility');

   
    module.exports = function(req, res) {
        let retrievedCategory;

        if(HelperUtility.isValidSlugOrCategory(req.params.slug)) {
            return db.category.findOne({where:{
                slug:req.params.slug
            }})
            .then((category) => {
                retrievedCategory = category;
                if(category) {
                    res.status(200).send(`Category retreived is: ${JSON.stringify(retrievedCategory)}`); 
                } else {
                    res.status(404).send(`Sorry could not find category with slug ${req.params.slug} in the database`); 
                }
            }).catch((error)=> {
                let errorMessage = `Failed to fetch category with slug ${req.params.slug}: ${error}`;
                logger.error(errorMessage);
                res.status(500).send(errorMessage);
            });
        } else {
            res.status(404).send(`Sorry params slug is not valid. Please provide valid slug value while calling the GET method http://localhost:3000/flaconiService/findCategoryBySlug/slug`);
        }
    };
  }());
  