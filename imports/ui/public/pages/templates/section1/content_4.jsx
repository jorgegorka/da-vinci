import React, { Component, PropTypes } from 'react';
import i18n from 'meteor/universe:i18n';

import PublicSection1Content2 from './content_2.jsx';

export default class PublicSection1Content4 extends Component {
  render() {
    return(
      <div>
  			<PublicSection1Content2 pageContents={ this.props.pageContents.slice(0, 2) } />
        <PublicSection1Content2 pageContents={ this.props.pageContents.slice(2, 4) } />
  		</div>
    );
  }
}

PublicSection1Content4.propTypes = {
  pageContents: PropTypes.array.isRequired
};
