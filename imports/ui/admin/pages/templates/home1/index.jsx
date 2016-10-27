import React, { Component, PropTypes } from 'react';
import update from 'react-addons-update';
import { createContainer } from 'meteor/react-meteor-data';
import i18n from 'meteor/universe:i18n';

import ContentColumn from '../../../../utils/containers/column.jsx';
import HomeSlider from './slider.jsx';
import HomeMainContent from './main_content.jsx';
import HomeBottomContent from './bottom_content.jsx';

export default class Home1Template extends Component {
  constructor(props) {
    super(props);
    this.state = { pageContent: {} };
  }

  contentChange(fieldName, fieldValue) {
    let newPageContent = update(this.state.pageContent, {
       [fieldName]: { $set: fieldValue }
    });

    this.setState({ pageContent: newPageContent });
  }

  savePage(event) {
    event.preventDefault();
    let that = this;

    Meteor.call('pageContents.update', this.props.pageId, this.state.pageContent, function(error, result) {
      if (error) {
        that.setState({ errorMessage: error.message });
        console.log(error.message);
        return
      } else {
        //Alert.info('Page created successfully', { position: 'top' });
        return
      }
    });
  }

  render() {
    return(
      <ContentColumn className="col-lg-12 col-xs-12 col-md-12">
        <form onSubmit={ this.savePage.bind(this) } id="MainContentForm">
          <HomeSlider pageId={ this.props.pageId } onChange={ this.contentChange.bind(this) } />
          <HomeMainContent pageId={ this.props.pageId } onChange={ this.contentChange.bind(this) } />
          <HomeBottomContent pageId={ this.props.pageId } onChange={ this.contentChange.bind(this) } />
          <button type="submit" className="btn-primary">Save page</button>
        </form>
      </ContentColumn>
    );
  }
}

Home1Template.propTypes = {
  pageId: PropTypes.string.isRequired,
};
