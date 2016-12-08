import React, { Component, PropTypes } from 'react';
import i18n from 'meteor/universe:i18n';

export default class Loading extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        { i18n.__('utils.containers.loading.header') }
      </div>
    );
  }
}

Loading.propTypes = {

};
