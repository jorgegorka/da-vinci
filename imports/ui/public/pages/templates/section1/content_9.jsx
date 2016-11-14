import React, { Component, PropTypes } from 'react';
import i18n from 'meteor/universe:i18n';

import PublicSection1Content3 from './content_3.jsx';

export default class PublicSection1Content9 extends Component {
  render() {
    return(
      <div>
  			<PublicSection1Content3 pageContents={ this.props.pageContents.slice(0, 3) } />
        <PublicSection1Content3 pageContents={ this.props.pageContents.slice(3, 6) } />
        <PublicSection1Content3 pageContents={ this.props.pageContents.slice(6, 9) } />
  		</div>
    );
  }
}

PublicSection1Content9.propTypes = {
  pageContents: PropTypes.array.isRequired
};
