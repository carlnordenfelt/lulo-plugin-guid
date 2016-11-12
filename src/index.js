'use strict';

var crypto = require('crypto');
var pub = {};

pub.validate = function (_event) {};

pub.create = function (event, _context, callback) {
    setImmediate(function () {
        var guid;
        if (event.PhysicalResourceId) {
            guid = event.PhysicalResourceId;
        } else {
            /* eslint no-extra-parens: 0 */
            /* eslint no-bitwise: 0 */
            /* eslint one-var: 0 */
            /* eslint no-magic-numbers: 0 */
            guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = crypto.randomBytes(1)[0] % 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }
        var data = {
            physicalResourceId: guid
        };
        callback(null, data);
    });
};

pub.delete = function (_event, _context, callback) {
    return setImmediate(callback);
};

pub.update = function (event, context, callback) {
    return pub.create(event, context, callback);
};

module.exports = pub;
