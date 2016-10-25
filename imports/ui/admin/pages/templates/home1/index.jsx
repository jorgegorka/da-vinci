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
    this.state = { page: this.props.page };
  }

  contentChange(fieldName, fieldValue) {
    let newPage = update(this.state.page, {
       content: { [fieldName]: { $set: fieldValue } }
    });

    this.setState({ page: newPage });
  }

  savePage(event) {
    event.preventDefault();
    let that = this;
    let pageData = {
      name: this.state.page.name,
      parentId: this.state.page.parentId,
      order: parseInt(this.state.page.order),
      isHomePage: this.state.page.isHomePage,
      showInMenu: this.state.page.showInMenu,
      pageTypeId: this.state.page.pageTypeId,
      content: this.state.page.content,
      language: i18n.getLocale(),
    };

    Meteor.call('pages.update', this.state.page._id, pageData, function(error, result) {
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
          <HomeSlider pageId={ this.props.page._id } content={ this.props.page.content } onChange={ this.contentChange.bind(this) } />
          <HomeMainContent page={ this.props.page } onChange={ this.contentChange.bind(this) } />
          <HomeBottomContent content={ this.props.page.content } onChange={ this.contentChange.bind(this) } />
          <button type="submit" className="btn-primary">Save page</button>
        </form>
      </ContentColumn>
    );
  }
}

Home1Template.propTypes = {
  page: PropTypes.object.isRequired,
};
