import React, { Component, PropTypes } from 'react';
import i18n from 'meteor/universe:i18n';
import update from 'react-addons-update';

import { Pages } from '../../../../lib/collections/pages';

import FormTag from '../../utils/form/index';
import FormGroup from '../../utils/form/group';
import FormSelect from '../../utils/form/select';
import FormLabel from '../../utils/form/label';
import FormCheckBox from '../../utils/form/check_box';
import FormInput from '../../utils/form/input';
import FormTextArea from '../../utils/form/text_area';
import FormInputTag from '../../utils/form/tag';
import AlertMessage from '../../utils/containers/alert_message';

export default class PageForm extends Component {
  constructor(props) {
    super(props);

    let defaultParentId = 'top';
    let defaultPageTypeId = 'Home 1';
    let defaultHomePage = false;
    let defaultOrder = '0';
    let defaultName = '';
    let defaultShowInMenu = false ;
    let defaultDraft = false;
    let defaultMetaInfo = { title: '', description: '' };
    let defaultTags = [];

    if (props.page) {
      defaultParentId = props.page.parentId;
      defaultPageTypeId = props.page.pageTypeId;
      defaultHomePage = props.page.isHomePage;
      defaultOrder = props.page.order.toString();
      defaultName = props.page.name;
      defaultShowInMenu = props.page.showInMenu;
      defaultDraft = props.page.draft;
      defaultMetaInfo = props.page.metaInfo;
      defaultTags = props.page.tags;
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
      tags: defaultTags
    };
  }

  selectParentPages() {
    let allItems = this.props.pages.map(function(page) {
      if (page.parentId && (page.parentId !=='top')) {
        parent = Pages.findOne({ _id: page.parentId });
        return { value: page._id, title: `${parent.name} -> ${page.name}` }
      } else {
        return { value: page._id, title: page.name }
      }
    });

    allItems.unshift({ value: 'top', title: '---' });
    return allItems;
  }

  selectPageTypes() {
    let allItems = this.props.pageTypes.map((pageType) => (
      { value: pageType._id, title: pageType.name }
    ));

    return allItems;
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
      tags: this.state.tags
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
                <AlertMessage alertText={ this.state.errorMessage } alertTitle={ i18n.__('admin.pages.form.error_occurred') } alertType="danger" />
                <div className="nav-tabs-custom">
                  <ul className="nav nav-tabs">
                    <li className="active">
                      <a href="#tab_1" data-toggle="tab" aria-expanded="false">{ i18n.__('admin.pages.form.page_info') }</a>
                    </li>
                    <li className="">
                      <a href="#tab_2" data-toggle="tab" aria-expanded="false">{ i18n.__('admin.pages.form.metadata') }</a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div className="tab-pane active" id="tab_1">
                      <FormGroup>
                        <FormLabel text={ i18n.__('admin.pages.form.name') } htmlFor="name" />
                        <FormInput defaultValue={ this.state.name } onChange={ this.updateContent.bind(this, 'name') } name="name" />
                      </FormGroup>
                      <FormGroup>
                        <FormLabel text={ i18n.__('admin.pages.form.page_type') } htmlFor="pageTypeId" />
                        <FormSelect selectOptions={ this.selectPageTypes() } name="pageTypeId" defaultValue={ this.state.pageTypeId } onChange={ this.updateContent.bind(this, 'pageTypeId') }/>
                      </FormGroup>
                      <FormGroup>
                        <FormLabel text={ i18n.__('admin.pages.form.parent_id') } htmlFor="pageParentId" />
                        <FormSelect selectOptions={ this.selectParentPages() } name="pageParentId" defaultValue={ this.state.parentId } onChange={ this.updateContent.bind(this, 'parentId') }/>
                      </FormGroup>
                      <FormGroup>
                        <FormLabel text={ i18n.__('admin.pages.form.order') } htmlFor="order" />
                        <FormInput defaultValue={ this.state.order } onChange={ this.updateContent.bind(this, 'order') } name="order" />
                      </FormGroup>
                      <FormGroup>
                        <FormCheckBox text={ i18n.__('admin.pages.form.is_home_page') } checked={ this.state.isHomePage } htmlFor="homePage" onChange={ this.updateContent.bind(this, 'isHomePage') } />
                      </FormGroup>
                      <FormGroup>
                        <FormCheckBox text={ i18n.__('admin.pages.form.show_in_menu') } checked={ this.state.showInMenu } htmlFor="showMenu" onChange={ this.updateContent.bind(this, 'showInMenu') } />
                      </FormGroup>
                      <FormGroup>
                        <FormCheckBox text={ i18n.__('admin.pages.form.draft') } checked={ this.state.draft } htmlFor="draft" onChange={ this.updateContent.bind(this, 'draft') } />
                      </FormGroup>
                    </div>
                    <div className="tab-pane" id="tab_2">
                      <FormGroup>
                        <FormLabel text={ i18n.__('admin.pages.form.meta_title') } htmlFor="metaTitle" />
                        <FormInput defaultValue={ this.state.metaInfo.title } onChange={ this.updateMetaInfoContent.bind(this, 'title') } name="metaTitle" />
                      </FormGroup>
                      <FormGroup>
                        <FormLabel text={ i18n.__('admin.pages.form.meta_description') } htmlFor="metaDescription" />
                        <FormTextArea defaultValue={ this.state.metaInfo.description } onChange={ this.updateMetaInfoContent.bind(this, 'description') } name="metaDescription" />
                      </FormGroup>
                      <FormGroup>
                        <FormLabel text={ i18n.__('admin.pages.form.tags') } />
                        <FormInputTag defaultValue={ this.state.tags } onChange={ this.updateContent.bind(this, 'tags') } />
                      </FormGroup>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default pull-left" data-dismiss="modal">{ i18n.__('admin.pages.form.discard') }</button>
                <button type="submit" className="btn btn-primary">{ i18n.__('admin.pages.form.save') }</button>
              </div>
            </FormTag>
          </div>
        </div>
      </div>
    );
  }
}

PageForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  methodName: PropTypes.string.isRequired,
  page: PropTypes.object,
  pages: PropTypes.array.isRequired,
  pageTypes: PropTypes.array.isRequired,
};
