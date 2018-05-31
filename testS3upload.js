var AWS = require('aws-sdk');
AWS.config.loadFromPath('./aws.config'); 
var s3 = new AWS.S3();
var fs=require('fs')

var steam =fs.createReadStream('./112.jpg')
var myBucket = 'xlab-1';

var myKey = '112-copy.jpg';

params = {Bucket: myBucket,ContentType:'binary' ,Key: myKey, Body: steam};

s3.putObject(params, function(err, data) {

         if (err) {

             console.log(err)

         } else {

             console.log("Successfully uploaded data to myBucket/myKey");

         }

      });


