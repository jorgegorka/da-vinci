import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Alert from 'react-s-alert';

import FormGroup from '../../utils/form/group.jsx'
import FormSelect from '../../utils/form/select.jsx'
import FormLabel from '../../utils/form/label.jsx'

export default class PageForm extends Component {
  constructor(props) {
    super(props)
    let defaultParentId = 'top';
    let defaultPageTypeId;
    if (this.props.page) {
      defaultParentId = this.props.page.parentId;
      defaultPageTypeId = this.props.page.pageTypeId;
    };
    this.state = {
      errorMessage: '',
      parentId: defaultParentId,
      pageTypeId: defaultPageTypeId,
    };
  }

  updateParentId(parentId) {
    this.setState({ parentId: parentId });
  }

  updatePageTypeId(pageTypeId) {
    this.setState({ pageTypeId: pageTypeId });
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

    if (this.props.page) {
      pageName  = this.props.page.name;
      pageOrder = this.props.page.order;
    }

    let pageTypeOptions = {
      selectItems: this.props.selectPageTypes,
      defaultValue: this.state.pageTypeId,
      selectName: 'pageType',
    };

    let parentOptions = {
      selectItems: this.props.selectParentPages,
      defaultValue: this.state.parentId,
      selectName: 'pageParentId',
    };


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
                <FormGroup>
                  <FormLabel text='Select the type of page' htmlFor="pageType" />
                  <FormSelect selectOptions={ pageTypeOptions } updatePageTypeId={ this.updateParentId.bind(this) }/>
                </FormGroup>
                <FormGroup>
                  <FormLabel text='Select parent page (leave it blank if none)' htmlFor="pageParentId" />
                  <FormSelect selectOptions={ parentOptions } updateParentId={ this.updateParentId.bind(this) }/>
                </FormGroup>
                <FormGroup>
                  <label htmlFor="order">Order</label>
                  <input className="form-control" ref="pageOrder" name="order" required type="text" defaultValue={ pageOrder } />
                </FormGroup>
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
  selectParentPages: PropTypes.array.isRequired,
  selectPageTypes: PropTypes.array.isRequired,
  formTitle: PropTypes.string.isRequired,
  methodName: PropTypes.string.isRequired,
  page: PropTypes.object,
};
