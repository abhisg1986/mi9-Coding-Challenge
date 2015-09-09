/**
 * Created by Chutku on 9/9/2015.
 */
function getDRMRes(req) {

    'use strict';

    var response = [];
    var drm = {};

    var reqObj = req.body;
    var payload = reqObj.payload;

    if(payload && payload.length > 0) {
        var i;
        for(i = 0; i < payload.length; i++){

            if(payload[i].drm === true && payload[i].episodeCount > 0)
            {
               drm.image = payload[i].image.showImage;
               drm.slug = payload[i].slug;
               drm.title = payload[i].title;

               response.push(drm);
            }
        }

    }

    return {"response" : response};
}
module.exports = {
    getDRMRes: getDRMRes
};