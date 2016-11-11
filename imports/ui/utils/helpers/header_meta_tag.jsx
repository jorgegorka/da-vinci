import React, { Component, PropTypes } from 'react';
import i18n from 'meteor/universe:i18n';

export default class HeaderMetaTag extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.title = this.props.metaInfo.title;
    let metaCharset = document.createElement('meta');
    metaCharset.setAttribute('charset', 'utf-8');
    document.getElementsByTagName('head')[0].appendChild(metaCharset);
    let metaContent = document.createElement('meta');
    metaContent.setAttribute('name', 'description');
    metaContent.setAttribute('content', this.props.metaInfo.description);
    document.getElementsByTagName('head')[0].appendChild(metaContent);
    let metaViewport = document.createElement('meta');
    metaViewport.setAttribute('name', 'viewport');
    metaViewport.setAttribute('content', 'width=device-width,minimum-scale=1.0,initial-scale=1,user-scalable=yes');
    document.getElementsByTagName('head')[0].appendChild(metaViewport);
  }

  render() {
    return(null);
  }
}

HeaderMetaTag.propTypes = {
  metaInfo: PropTypes.object.isRequired
};
