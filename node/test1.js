'use strict';
const jwt = require('machinepack-jwt');
/*
 ====================   JWT Signing =====================
*/
var payload = {
 data1: "Data 1",
 data2: "Data 2",
 data3: "Data 3",
 data4: "Data 4",
};

jwt.encode({
         secret: 'secret',
         algorithm: 'HS512',
         expires: 2880, //in minutes(two days)
         payload: payload
       }).exec({
         error: function (err){
           console.log(err);
         },
         success : function (authToken){
           console.log(authToken);
           jwt.decode({
                   secret: 'secret',
                   token: authToken,
                   algorithm: 'HS512',
                   schema:'data1,data2,data3,data4'
                 }).exec({
                   error: function (err) {
                     console.log(err);
                   },
                   success: function (decodedToken) {
                     console.log(decodedToken);
                   }
                 });
         }
       });
