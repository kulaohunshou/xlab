const { uploader } = require('../qcloud')
const AWS = require('aws-sdk');
const fs = require('fs')
module.exports = async ctx => {
    // 获取上传之后的结果
    // 具体可以查看：
    // const data = await uploader(ctx.req)

    // ctx.state.data = data

    AWS.config.loadFromPath('./aws.config');
    var s3 = new AWS.S3();
    var steam = fs.createReadStream('./112.jpg')
    var myBucket = 'xlab-1';
    var myKey = '112-copy-lala.jpg';
    params = { Bucket: myBucket, ContentType: 'binary', Key: myKey, Body: steam };
    s3.putObject(params, function (err, data) {
      if (err) {
        console.log(err)
      } else {
        console.log("Successfully uploaded data to myBucket/myKey");
      }
    });
}

