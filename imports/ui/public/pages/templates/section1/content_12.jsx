import React, { Component, PropTypes } from 'react';
import i18n from 'meteor/universe:i18n';

import PublicSection1Content4 from './content_4.jsx';

export default class PublicSection1Content12 extends Component {
  render() {
    return(
      <div>
  			<PublicSection1Content4 pageContents={ this.props.pageContents.slice(0, 4) } />
        <PublicSection1Content4 pageContents={ this.props.pageContents.slice(4, 8) } />
        <PublicSection1Content4 pageContents={ this.props.pageContents.slice(8, 12) } />
  		</div>
    );
  }
}

PublicSection1Content12.propTypes = {
  pageContents: PropTypes.array.isRequired
};
