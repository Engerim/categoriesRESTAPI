(function() {
    'use strict';
    const db = require('../../db.js'),
    logger = require('../../init/initLogger').initLogger(),
    HelperUtility = require('../../utils/HelperUtility');

   
    module.exports = function(req, res) {

        if(HelperUtility.isValidVisiblity(req.body.isVisible)) {
            return db.category.findOne({
                where: {
                    id:req.params.categoryId
                }
            }).then(category=>{
                if(category) {
                    return category.updateAttributes({
                        isVisible: req.body.isVisible
                    }).then((updatedCategory) => {
                        res.status(200).send(`Category with id ${req.params.categoryId} successfully updated. The updated object is ${JSON.stringify(updatedCategory)}`); 
                   
                }).catch((error)=> {
                    let errorMessage = `Failed to fetch category with id ${req.params.categoryId}: ${error}`;
                    logger.error(errorMessage);
                    res.status(500).send(errorMessage);
                });
                } else{
                    res.status(404).send(`Category with id ${req.params.categoryId} does not exist in the table`);
                }
            })
        } else {
            res.status(404).send(`Invalid isVisible value provided. Please provide boolean values of true or false`); 
        }
    };
  }());
  