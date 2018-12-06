(function() {
    'use strict';
    const db = require('../../db.js'),
    logger = require('../../init/initLogger').initLogger(),
    HelperUtility = require('../../utils/HelperUtility');

   
    module.exports = function(req, res) {
        let retrievedCategory;
        if(HelperUtility.isValidInteger(req.params.categoryId)) {
            return db.category.findOne({where:{
                id:req.params.categoryId
            }})
            .then((category) => {
                retrievedCategory = category;
                if(category) {
                    res.status(200).send(`Category retreived is: ${JSON.stringify(retrievedCategory)}`); 
                } else {
                    res.status(404).send(`Sorry could not find category with id ${req.params.categoryId} in the database`); 
                }
            }).catch((error)=> {
                let errorMessage = `Failed to fetch category with id ${req.params.categoryId}: ${error}`;
                logger.error(errorMessage);
                res.status(500).send(errorMessage);
            });
        } else {
            res.status(404).send(`Sorry params categoryId is not a valid integer. Please provide valid integer while calling the GET method http://localhost:3000/flaconiService/findCategoryById/categoryId`); 
        }
    };
  }());
  