import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Alert from 'react-s-alert';

export default class PageForm extends Component {
  constructor(props) {
    super(props)
    let defaultParentId = 'top';
    if (this.props.page) {
      defaultParentId = this.props.page.parentId;
    };
    this.state = { errorMessage: '', parentId: defaultParentId }
  }

  updateParentId(event) {
    this.setState({ parentId: event.target.value });
  }

  methodParams() {
    let methodParams = [this.props.methodName]

    if (this.props.page) {
      methodParams.push(this.props.page._id);
    }

    return methodParams;
  }

  submitEvent(event) {
    event.preventDefault();
    let that = this;
    let name = ReactDOM.findDOMNode(this.refs.pageName).value.trim();
    let parentId = this.state.parentId;
    let order = ReactDOM.findDOMNode(this.refs.pageOrder).value.trim();
    let page = {};

    if (!name) {
      return;
    } else {
      page.name = name;
    };
    page.parentId = parentId;
    page.order = parseInt(order);

    let methodParams = this.methodParams();

    Meteor.call(...methodParams, page, function(error, result) {
      if (error) {
        that.setState({ errorMessage: error.message });
        return
      } else {
        Alert.info('Page created successfully', { position: 'top' });
        $('#page-form').modal('hide');
        return
      }
    });
  }

  render() {
    let pageName, pageOrder = '';
    let pageParentId = 'top';
    let allItems = this.props.selectItems.map((selectItem, index) => {
      return (<option key={ index } value={ selectItem.value }>{ selectItem.title }</option>);
    });

    if (this.props.page) {
      pageName  = this.props.page.name
      pageOrder = this.props.page.order
      pageParentId = this.props.page.parentId
    }


    return(
      <div className="modal" id="page-form">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
              <h4 className="modal-title">{ this.props.formTitle }</h4>
            </div>
            <form role="form" onSubmit={ this.submitEvent.bind(this) }>
              <div className="modal-body">
                { this.state.errorMessage ?
                  <div className="alert alert-danger alert-dismissible">
                    <h4><i className="icon fa fa-ban"></i> An error has occurred!</h4>
                    { this.state.errorMessage }
                  </div> : null }
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input className="form-control" autoFocus ref="pageName" name="name" required type="text" defaultValue={ pageName } />
                </div>
                <div className="form-group">
                  <label htmlFor="pageParentId">Select parent page (leave it blank if none).</label>
                  <select onChange={ this.updateParentId.bind(this) } value={ pageParentId } className="form-control" name="pageParentId">
                    { allItems }
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="order">Order</label>
                  <input className="form-control" ref="pageOrder" name="order" required type="text" defaultValue={ pageOrder } />
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

PageForm.propTypes = {
  selectItems: PropTypes.array.isRequired,
  formTitle: PropTypes.string.isRequired,
  methodName: PropTypes.string.isRequired,
  page: PropTypes.object,
};
