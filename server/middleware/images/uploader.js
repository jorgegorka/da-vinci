import { Meteor } from 'meteor/meteor';
import UrlParse from 'url-parse';

export class ImagesUploader {
  constructor() {
    if (Meteor.settings.AWS) {
      AWS.config.update({
        accessKeyId: Meteor.settings.AWS.accessKeyId,
        secretAccessKey: Meteor.settings.AWS.secretAccessKey
      });
    } else {
      throw new Meteor.Error("s3-settings", "Please add your Amazon S3 credentials to the settings file. Check the docs for more info.");
    };

    this.s3 = new AWS.S3();
  }

  upload(image) {
    let params = {
      ACL: "public-read",
      Bucket: Meteor.settings.AWS.bucket,
      Key: 'images/' + image.fileName,
      ContentType: image.fileType,
      Body: image.fileData,
    };

    return(this.s3.uploadSync(params));
  }

  destroy(imagePath) {
    let imageKey = this._removeHostFromPath(imagePath);
    let params = {
      Bucket: Meteor.settings.AWS.bucket,
      Key: imageKey
    };

    return(this.s3.deleteObjectSync(params));
  }

  _removeHostFromPath(imagePath) {
    // Remove hostname from target link
    let url = new UrlParse(imagePath);
    return url.pathname.substring(1);
  }
}
