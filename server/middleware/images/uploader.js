import { Meteor } from 'meteor/meteor';

export class ImagesUploader {
  constructor(image) {
    if (Meteor.settings.AWS) {
      AWS.config.update({
        accessKeyId: Meteor.settings.AWS.accessKeyId,
        secretAccessKey: Meteor.settings.AWS.secretAccessKey
      });
    } else {
      throw new Meteor.Error("s3-settings", "Please add your Amazon S3 credentials to the settings file. Check the docs for more info.");
    };

    this.image = image;
  }

  upload() {
    let s3 = new AWS.S3();
    let params = {
      ACL: "public-read",
      Bucket: Meteor.settings.AWS.bucket,
      Key: 'images/' + this.image.fileName,
      ContentType: this.image.fileType,
      Body: this.image.fileData,
    };

    return(s3.uploadSync(params));
  }
}
