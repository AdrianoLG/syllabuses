'use strict';

var auth = require('../../auth/auth.service');
import Syllabus from './syllabus.model';
var compose = require('composable-middleware');

export function isOwner() {
    return compose()
        .use(function meetsRequirements(req, res, next) {
            Syllabus.findById(req.params.id).execAsync()
            .then(function (syllabus) {
                if(!syllabus) {
                    return res.status(404).end();
                }
                if(req.user._id && req.user._id.equals(syllabus.owner)) {
                    next();
                } else {
                    res.status(403).send('Forbidden');
                }
            });
        });
}
