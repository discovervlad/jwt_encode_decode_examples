'use strict';
const jwt = require('machinepack-jwt');
/*
 ====================   JWT Signing =====================
*/

var authToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzb21lIjoicGF5bG9hZCJ9.EgMnzcJYrElON09Bw_OwaqR_Z7Cq30n7cgTZGJqtK1YHfG1cGnGJoJGwOLj6AWg9taOyJN3Dnqd9NXeTCjTCwA'

console.log(authToken);
jwt.decode({
    secret: 'secret',
    token: authToken,
    algorithm: 'HS512',
    schema:'some'
}).exec({
    error: function (err) {
        console.log(err);
    },
    success: function (decodedToken) {
        console.log(decodedToken);
    }
});
