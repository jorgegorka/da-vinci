import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Alert from 'react-s-alert';

import FormTag from '../../utils/form/tag.jsx'
import FormGroup from '../../utils/form/group.jsx'
import FormSelect from '../../utils/form/select.jsx'
import FormLabel from '../../utils/form/label.jsx'
import FormCheckBox from '../../utils/form/check_box.jsx'
import FormInput from '../../utils/form/input.jsx'
import ErrorMessage from '../../utils/containers/error_message.jsx'

export default class PageForm extends Component {
  constructor(props) {
    super(props)
    let defaultParentId = 'top';
    let defaultPageTypeId;
    let defaultHomePage;
    let defaultOrder;
    let defaultName;

    if (this.props.page) {
      defaultParentId = this.props.page.parentId || 'top';
      defaultPageTypeId = this.props.page.pageTypeId || '';
      defaultHomePage = this.props.page.isHomePage || false;
      defaultOrder = this.props.page.order || 0;
      defaultName = this.props.page.name || '';
    };

    this.state = {
      errorMessage: '',
      parentId: defaultParentId,
      pageTypeId: defaultPageTypeId,
      isHomePage: defaultHomePage,
      order: defaultOrder,
      name: defaultName,
    };
  }

  updateName(name) {
    this.setState({ name: name });
  }

  updateParentId(parentId) {
    this.setState({ parentId: parentId });
  }

  updatePageTypeId(pageTypeId) {
    this.setState({ pageTypeId: pageTypeId });
  }

  updateHomePage(isHomePage) {
    this.setState({ isHomePage: isHomePage });
  }

  updateOrder(order) {
    this.setState({ order: order });
  }

  methodParams() {
    let methodParams = [this.props.methodName]

    if (this.props.page) {
      methodParams.push(this.props.page._id);
    }

    return methodParams;
  }

  submitEvent() {
    let that = this;
    let page = {
      name: this.state.name,
      parentId: this.state.parentId,
      order: parseInt(this.state.order),
      isHomePage: this.state.isHomePage,
      pageTypeId: this.state.pageTypeId,
    };

    let methodParams = [this.props.methodName, page]

    if (this.props.page) {
      methodParams.push(this.props.page._id);
    }

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
            <FormTag onSubmit={ this.submitEvent.bind(this) }>
              <div className="modal-body">
                <ErrorMessage errorMessage={ this.state.errorMessage } />
                <FormGroup>
                  <FormLabel text='Name' htmlFor="name" />
                  <FormInput defaultValue={ this.state.name } onChange={ this.updateName.bind(this) } name="name" />
                </FormGroup>
                <FormGroup>
                  <FormLabel text='Select the type of page' htmlFor="pageType" />
                  <FormSelect selectOptions={ pageTypeOptions } updatePageTypeId={ this.updateParentId.bind(this) }/>
                </FormGroup>
                <FormGroup>
                  <FormLabel text='Select parent page (leave it blank if none)' htmlFor="pageParentId" />
                  <FormSelect selectOptions={ parentOptions } updateParentId={ this.updateParentId.bind(this) }/>
                </FormGroup>
                <FormGroup>
                  <FormLabel text='Order' htmlFor="order" />
                  <FormInput defaultValue={ this.state.order } onChange={ this.updateOrder.bind(this) } name="order" />
                </FormGroup>
                <FormGroup>
                  <FormCheckBox text='Set page as Homepage?' htmlFor="homePage" />
                </FormGroup>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default pull-left" data-dismiss="modal">Discard</button>
                <button type="submit" className="btn btn-primary">Save</button>
              </div>
            </FormTag>
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
