import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class SelectForm extends Component {
  constructor(props) {
    super(props)
  }

  updateParentId(event) {
    this.props.updateParentId(event.target.value);
  }

  render() {
    let allItems = this.props.selectItems.map(function(selectItem, index) {
      return (<option key={ index } value={ selectItem.value }>{ selectItem.title }</option>);
    });

    return(
      <select onChange={ this.updateParentId.bind(this) } className="form-control" name={ this.props.selectName }>
        { allItems }
      </select>
    );
  }
}

SelectForm.propTypes = {
  selectItems: PropTypes.array.isRequired,
  selectName: PropTypes.string.isRequired,
  updateParentId: PropTypes.func.isRequired,
};
