import React, { Component, PropTypes } from 'react';
import update from 'react-addons-update';
import { createContainer } from 'meteor/react-meteor-data';
import i18n from 'meteor/universe:i18n';

import HomeSlider from './slider.jsx';
import HomeMainContent from './main_content.jsx';
import HomeBottomContent from './bottom_content.jsx';

export default class Home1Template extends Component {
  constructor(props) {
    super(props);
    this.state = { page: this.props.page };
  }

  bottomContentChange(content) {
    let newPage = update(this.state.page, {
       content: { $set: { content1: '', content2: '', content3: '', content4: '', content5: content } }
    });

    this.setState({ page: newPage });
  }

  savePage() {
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
        Alert.info('Page created successfully', { position: 'top' });
        return
      }
    });
  }

  render() {
    return(
      <div className="col-lg-12 col-xs-12 col-md-12">
        <HomeSlider page={ this.props.page } />
        <HomeMainContent page={ this.props.page } />
        <HomeBottomContent page={ this.props.page } onChange={ this.bottomContentChange.bind(this) }/>
        <button onClick={ this.savePage.bind(this) } className="btn-primary">Save page</button>
      </div>
    );
  }
}

Home1Template.propTypes = {
  page: PropTypes.object.isRequired,
};
