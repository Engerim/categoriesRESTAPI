(function() {
    'use strict';
    const db = require('../../db.js'),
    logger = require('../../init/initLogger').initLogger(),
    HelperUtility = require('../../utils/HelperUtility');

    module.exports = function(req, res) {
        if(HelperUtility.isValidSlugOrCategory(req.params.parentCategory)) {
            return db.category.findAll({where:{
                parentCategory:req.params.parentCategory
            }})
            .then((retrievedCategories) => {
                if(retrievedCategories.length > 0) {
                    res.status(200).send(`Category retreived is: ${JSON.stringify(retrievedCategories)}`); 
                } else {
                    res.status(404).send(`Sorry could not find categories with parentCategory ${req.params.parentCategory} in the database`); 
                }
            }).catch((error)=> {
                let errorMessage = `Failed to find categories with parent category ${req.params.parentCategory}: ${error}`;
                logger.error(errorMessage);
                res.status(500).send(errorMessage);
            });
        } else {
            res.status(404).send(`Sorry parentCategory is not a valid string. Please provide valid parentCategory value while calling the GET method http://localhost:3000/flaconiService/findCategoriesByParentCategory/yourParentCategory`); 
        }
    };
  }());
  