import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Alert from 'react-s-alert';

export default class CategoryForm extends Component {
  constructor(props) {
    super(props)
    this.state = { errorMessage: '' }
  }

  submitEvent(event) {
    event.preventDefault();
    let that = this;
    let name = ReactDOM.findDOMNode(this.refs.categoryName).value.trim();
    let parentId; //= ReactDOM.findDOMNode(this.refs.parentId).value.trim();
    let order; //= ReactDOM.findDOMNode(this.refs.order).value.trim();
    let category = {};

    if (!name) {
      return;
    } else {
      category.name = name;
    };
    category.parentId = parentId;
    category.order = order || 0;

    Meteor.call('categories.addCategory', category, function(error, result) {
      if (error) {
        that.setState({ errorMessage: error.message });
        return
      } else {
        Alert.info('Category created successfully', { position: 'top' });
        $('#category-form').modal('hide');
        return
      }
    });
  }

  render() {
    return(
      <div className="modal" id="category-form">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
              <h4 className="modal-title">Add new category</h4>
            </div>
            <form role="form" onSubmit={ this.submitEvent.bind(this) }>
              <div className="modal-body">
                { this.state.errorMessage ?
                  <div className="alert alert-danger alert-dismissible">
                    <h4><i className="icon fa fa-ban"></i> An error has occurred!</h4>
                    { this.state.errorMessage }
                  </div> : null }
                <div className="form-group">
                  <label htmlFor="name">Category name</label>
                  <input className="form-control" autoFocus ref="categoryName" name="name" required type="text" />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default pull-left" data-dismiss="modal">Discard</button>
                <button type="submit" className="btn btn-primary">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
