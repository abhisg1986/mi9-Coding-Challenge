/**
 * Created by Chutku on 9/9/2015.
 */

function validateJSON(str){
    'use strict';
    try {

        JSON.parse(str);

    } catch(e) {
        return false;
    }
    return true;
}

module.exports = {
    validateJSON: validateJSON
};
