(function() {
    'use strict';
    const db = require('../db.js');
    
    module.exports = class HelperUtility {
  
       constructor() {}

       static isValidInteger(value) {
            if (value.match(/[a-z]/i) || value.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/)) {
                return false;
            } 
            return true;
        }

        static isValidSlugOrCategory(slug) {
            slug = slug.trim();
            return slug != undefined && slug != 'undefined' && slug != 'null' && slug != null && slug != NaN && slug != 'NaN' &&  slug != ""
        }

        static isValidVisiblity(value) {
            if(typeof value == 'boolean') {
                return true;
            } else if(typeof value == 'string' && (value == "true" || value == "false")) {
                return true;
            }
               return false;
        }

        static doesSlugExists(value) {
            return db.category.findOne({
                where:{slug:value}
            }).then((category)=>{
                if(category){
                    return true;
                } else {
                    return false;
                }
            })
        }
          
    }    
    
  
  }());
  