import React, { Component, PropTypes } from 'react';
import i18n from 'meteor/universe:i18n';

import PublicSection1Content3 from './content_3.jsx';
import PublicSection1Content4 from './content_4.jsx';

export default class PublicSection1Content10 extends Component {
  render() {
    return(
      <div>
  			<PublicSection1Content3 pageContents={ this.props.pageContents.slice(0, 3) } />
        <PublicSection1Content3 pageContents={ this.props.pageContents.slice(3, 6) } />
        <PublicSection1Content4 pageContents={ this.props.pageContents.slice(6, 10) } />
  		</div>
    );
  }
}

PublicSection1Content10.propTypes = {
  pageContents: PropTypes.array.isRequired
};
