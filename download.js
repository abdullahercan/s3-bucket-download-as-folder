const aws = require("aws-sdk");
const rl = require("readline-sync");
const fs = require("fs");
const s3 = new aws.S3();

const getDirName = require("path").dirname;

// Bucket name question
const Bucket = rl.question("Bucket name ? ");
if (Bucket == "") {
  console.log("Please define bucket!");
  return;
}

// Create a folder
const writeFile = (path, content) => {
  fs.mkdir(getDirName(path), { recursive: true }, (err) => {
    if (err) console.log(err, err.stack);
    else {
      fs.writeFile(path, content, () => {
        console.log("Finished: " + path);
      });
    }
  });
};

// Create a bucket folder
fs.mkdirSync(Bucket);

// List
s3.listObjects(
  {
    Bucket,
  },
  (err, data) => {
    if (err) console.log(err, err.stack);
    else {
      data.Contents.forEach((value, index) => {
        s3.getObject(
          {
            Bucket,
            Key: value.Key,
          },
          (err, data) => {
            if (err) console.log(err, err.stack);
            writeFile(Bucket + "/" + value.Key, data.Body);
          }
        );
      });
    }
  }
);
