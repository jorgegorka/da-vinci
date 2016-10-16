import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Alert from 'react-s-alert';

export default class SectionForm extends Component {
  constructor(props) {
    super(props)
    let defaultParentId = 'top';
    if (this.props.section) {
      defaultParentId = this.props.section.parentId;
    };
    this.state = { errorMessage: '', parentId: defaultParentId }
  }

  updateParentId(event) {
    this.setState({ parentId: event.target.value });
  }

  methodParams() {
    let methodParams = [this.props.methodName]

    if (this.props.section) {
      methodParams.push(this.props.section._id);
    }

    return methodParams;
  }

  submitEvent(event) {
    event.preventDefault();
    let that = this;
    let name = ReactDOM.findDOMNode(this.refs.sectionName).value.trim();
    let parentId = this.state.parentId;
    let order = ReactDOM.findDOMNode(this.refs.sectionOrder).value.trim();
    let section = {};

    if (!name) {
      return;
    } else {
      section.name = name;
    };
    section.parentId = parentId;
    section.order = parseInt(order);

    let methodParams = this.methodParams();

    Meteor.call(...methodParams, section, function(error, result) {
      if (error) {
        that.setState({ errorMessage: error.message });
        return
      } else {
        Alert.info('Section created successfully', { position: 'top' });
        $('#section-form').modal('hide');
        return
      }
    });
  }

  render() {
    let sectionName, sectionOrder = '';
    let sectionParentId = 'top';
    let allItems = this.props.selectItems.map((selectItem, index) => {
      return (<option key={ index } value={ selectItem.value }>{ selectItem.title }</option>);
    });

    if (this.props.section) {
      sectionName  = this.props.section.name
      sectionOrder = this.props.section.order
      sectionParentId = this.props.section.parentId
    }


    return(
      <div className="modal" id="section-form">
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
                  <input className="form-control" autoFocus ref="sectionName" name="name" required type="text" defaultValue={ sectionName } />
                </div>
                <div className="form-group">
                  <label htmlFor="sectionParentId">Select parent section (leave it blank if none).</label>
                  <select onChange={ this.updateParentId.bind(this) } value={ sectionParentId } className="form-control" name="sectionParentId">
                    { allItems }
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="order">Order</label>
                  <input className="form-control" ref="sectionOrder" name="order" required type="text" defaultValue={ sectionOrder } />
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

SectionForm.propTypes = {
  selectItems: PropTypes.array.isRequired,
  formTitle: PropTypes.string.isRequired,
  methodName: PropTypes.string.isRequired,
  section: PropTypes.object,
};
