import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import i18n from 'meteor/universe:i18n';

import ContentImageEditor from './image_editor/index.jsx';

export default class PageContentRow extends Component {
  constructor(props) {
    super(props)
  }

  deletePage() {
    let that = this;
    if (window.confirm(i18n.__('settings.are_you_sure'))) {
      Meteor.call('pageContents.destroy', this.props.pageContent._id, function(error, result) {
        if (error) {
          console.log(error.message);
          that.setState({ errorMessage: error.message });
          return
        } else {
          // Alert deletion was fine
          return
        }
      });
    }
  }

  render() {
    return(
      <tr>
        <td>
          <img src={ this.props.pageContent.imagePath } width="100" />
        </td>
        <td>
          { this.props.pageContent.imageTitle }
        </td>
        <td>
          { this.props.pageContent.targetLink }
        </td>
        <td>
          <button type="button" className="btn btn-info" data-toggle="modal" data-target={ "#content-" + this.props.pageContent._id }>{ i18n.__('settings.edit') }</button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button type="button" className="btn btn-danger" onClick={ this.deletePage.bind(this) }>{ i18n.__('settings.delete') }</button>
        </td>
      </tr>
    );
  }
}

PageContentRow.propTypes = {
  pageContent: PropTypes.object.isRequired,
  contentType: PropTypes.string.isRequired,
  includeText: PropTypes.bool.isRequired,
};
