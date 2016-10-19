import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { RIETextArea } from 'riek'

export default class HomeBottomContentText extends Component {
  constructor(props) {
    super(props)
    this.state= { bottomContent: 'Load from database' }
  }

  contentUpdated(content) {
    console.log(content.bottomContent);
  }

  validateContent(content) {
    return true;
  }

  render() {
    return(
      <div className="col-lg-4 col-md-4 col-xs-6">
        <RIETextArea
          value={ this.state.bottomContent }
          change={ this.contentUpdated }
          propName="bottomContent"
          validate={ this.validateContent }
          classLoading="loading"
          classInvalid="invalid"
          rows="5"
          cols="90"
        />
      </div>
    );
  }
}

HomeBottomContentText.propTypes = {
};
