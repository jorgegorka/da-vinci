import React, { Component, PropTypes } from 'react';
import i18n from 'meteor/universe:i18n';

import PublicSection1Content2 from './content_2.jsx';
import PublicSection1Content3 from './content_3.jsx';

export default class PublicSection1Content5 extends Component {
  render() {
    return(
      <div>
  			<PublicSection1Content2 pageContents={ this.props.pageContents.slice(0, 2) } />
        <PublicSection1Content3 pageContents={ this.props.pageContents.slice(2, 5) } />
  		</div>
    );
  }
}

PublicSection1Content5.propTypes = {
  pageContents: PropTypes.array.isRequired
};
