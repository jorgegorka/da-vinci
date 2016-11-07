import React, { Component, PropTypes } from 'react';
import i18n from 'meteor/universe:i18n';

import PublicProduct1MainContent from './main_content.jsx';
import PublicProduct1Sidebar from './sidebar.jsx';
import RelatedProducts from './related_products.jsx';

export default class PublicProduct1Template extends Component {
  render() {
    return(
      <div className="wrapper">
        <div className="content">
          <div className="container">
            <div className="row">
              <article className="col-md-9 col-sm-8 maincontent">
                <PublicProduct1MainContent pageId={ this.props.page._id } title={ this.props.page.name }/>
                <hr className="hr-nobg hr-sm" />
                <RelatedProducts relatedProducts={ this.props.page.relatedIds } />
              </article>
              <section className="col-md-3 col-sm-4 sidebar">
                <PublicProduct1Sidebar pageId={ this.props.page._id } />
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PublicProduct1Template.propTypes = {
  page: PropTypes.object.isRequired
};
