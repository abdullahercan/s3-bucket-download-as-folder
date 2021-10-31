# s3 bucket download as folder
NodeJS script to download Amazon S3 buckets as folder
# Installation

```
git clone https://github.com/abdullahercan/s3-bucket-download-as-folder.git
cd s3-bucket-download-as-folder && npm install
```

Install the required node modules:

```
npm install aws-sdk
npm install readline-sync
```
Configure the credentials by creating a credentials file at ~/.aws/credentials on macos.

For details: https://docs.aws.amazon.com/sdkref/latest/guide/file-location.html

```
[default]
aws_access_key_id = your_access_key
aws_secret_access_key = your_secret_key
```
# Usage
```
node download.js
```
or
```
npm run start
```
All files with bucket name will be saved.
# License
MIT
