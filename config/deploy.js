try{require('dotenv').load(require('path').resolve(__dirname, '../.env'));}catch(_){}

module.exports = {
   production: {
    store: {
      type: 'S3',
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_KEY,
      bucket: 'fumc-mission-control',
      hostName: 'fumc-mission-control.s3-website-us-east-1.amazonaws.com',
      manifestSize: Infinity
    },
    assets: {
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_KEY,
      bucket: 'fumc-mission-control'
    }
  }
};
