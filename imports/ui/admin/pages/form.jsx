import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import update from 'react-addons-update';

import FormTag from '../../utils/form/tag.jsx'
import FormGroup from '../../utils/form/group.jsx'
import FormSelect from '../../utils/form/select.jsx'
import FormLabel from '../../utils/form/label.jsx'
import FormCheckBox from '../../utils/form/check_box.jsx'
import FormInput from '../../utils/form/input.jsx'
import FormTextArea from '../../utils/form/text_area.jsx'
import AlertMessage from '../../utils/containers/alert_message.jsx'

export default class PageForm extends Component {
  constructor(props) {
    super(props)
    let defaultParentId = 'top';
    let defaultPageTypeId = props.selectPageTypes[0].value;
    let defaultHomePage = false;
    let defaultOrder = '0';
    let defaultName = '';
    let defaultShowInMenu = false ;
    let defaultDraft = false;
    let defaultMetaInfo = { title: '', description: '' };

    if (props.page) {
      defaultParentId = props.page.parentId;
      defaultPageTypeId = props.page.pageTypeId;
      defaultHomePage = props.page.isHomePage;
      defaultOrder = props.page.order.toString();
      defaultName = props.page.name;
      defaultShowInMenu = props.page.showInMenu;
      defaultDraft = props.page.draft;
      defaultMetaInfo = props.page.metaInfo;
    };

    this.state = {
      errorMessage: '',
      parentId: defaultParentId,
      pageTypeId: defaultPageTypeId,
      isHomePage: defaultHomePage,
      draft: defaultDraft,
      showInMenu: defaultShowInMenu,
      order: defaultOrder,
      name: defaultName,
      metaInfo: defaultMetaInfo,
    };
  }

  updateContent(fieldName, fieldValue) {
    this.setState({ [fieldName]: fieldValue });
  }

  updateMetaInfoContent(fieldName, fieldValue) {
    let newMetaInfo = update(this.state.metaInfo, {
       [fieldName]: { $set: fieldValue }
    });

    this.setState({ metaInfo: newMetaInfo });
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
      draft: this.state.draft,
      showInMenu: this.state.showInMenu,
      pageTypeId: this.state.pageTypeId,
      metaInfo: this.state.metaInfo,
    };

    let methodParams = [this.props.methodName, page]

    if (this.props.page) {
      methodParams.splice(1, 0, this.props.page._id);
    }

    Meteor.call(...methodParams, function(error, result) {
      if (error) {
        that.setState({ errorMessage: error.message });
        return
      } else {
        //Alert.info('Page created successfully', { position: 'top' });
        $('#page-form').modal('hide');
        return
      }
    });
  }

  render() {
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
                <AlertMessage alertText={ this.state.errorMessage } alertTitle="An error has occurred!" alertType="danger" />
                <div className="nav-tabs-custom">
                  <ul className="nav nav-tabs">
                    <li className="active">
                      <a href="#tab_1" data-toggle="tab" aria-expanded="false">Page info</a>
                    </li>
                    <li className="">
                      <a href="#tab_2" data-toggle="tab" aria-expanded="false">Metadata</a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div className="tab-pane active" id="tab_1">
                      <FormGroup>
                        <FormLabel text='Name' htmlFor="name" />
                        <FormInput defaultValue={ this.state.name } onChange={ this.updateContent.bind(this, 'name') } name="name" />
                      </FormGroup>
                      <FormGroup>
                        <FormLabel text='Select the type of page' htmlFor="pageTypeId" />
                        <FormSelect selectOptions={ this.props.selectPageTypes } name="pageTypeId" defaultValue={ this.state.pageTypeId } onChange={ this.updateContent.bind(this, 'pageTypeId') }/>
                      </FormGroup>
                      <FormGroup>
                        <FormLabel text='Select parent page (leave it blank if none)' htmlFor="pageParentId" />
                        <FormSelect selectOptions={ this.props.selectParentPages } name="pageParentId" defaultValue={ this.state.pageParentId } onChange={ this.updateContent.bind(this, 'parentId') }/>
                      </FormGroup>
                      <FormGroup>
                        <FormLabel text='Order' htmlFor="order" />
                        <FormInput defaultValue={ this.state.order } onChange={ this.updateContent.bind(this, 'order') } name="order" />
                      </FormGroup>
                      <FormGroup>
                        <FormCheckBox text='Set page as homepage?' htmlFor="homePage" onChange={ this.updateContent.bind(this, 'isHomePage') } />
                      </FormGroup>
                      <FormGroup>
                        <FormCheckBox text='Show page in main menu?' htmlFor="showMenu" onChange={ this.updateContent.bind(this, 'showInMenu') } />
                      </FormGroup>
                      <FormGroup>
                        <FormCheckBox text='This page is a draft (Draft pages do not appear in the public website).' htmlFor="draft" onChange={ this.updateContent.bind(this, 'draft') } />
                      </FormGroup>
                    </div>
                    <div className="tab-pane" id="tab_2">
                      <FormGroup>
                        <FormLabel text='Title' htmlFor="metaTitle" />
                        <FormInput defaultValue={ this.state.metaInfo.title } onChange={ this.updateMetaInfoContent.bind(this, 'title') } name="metaTitle" />
                      </FormGroup>
                      <FormGroup>
                        <FormLabel text='Description' htmlFor="metaDescription" />
                        <FormTextArea defaultValue={ this.state.metaInfo.description } onChange={ this.updateMetaInfoContent.bind(this, 'description') } name="metaDescription" />
                      </FormGroup>
                    </div>
                  </div>
                </div>
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
