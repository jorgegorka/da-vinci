import React, { Component, PropTypes } from 'react';

export default class Dashboard extends Component {
  render() {
    return(
      <div className="content-wrapper">
        <page className="content-header">
          <h1>
            Widgets
            <small>Preview page</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
            <li className="active">Widgets</li>
          </ol>
        </page>
        <page className="content">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="info-box">
                <span className="info-box-icon bg-aqua"><i className="fa fa-envelope-o"></i></span>

                <div className="info-box-content">
                  <span className="info-box-text">Messages</span>
                  <span className="info-box-number">1,410</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="info-box">
                <span className="info-box-icon bg-green"><i className="fa fa-flag-o"></i></span>
                <div className="info-box-content">
                  <span className="info-box-text">Bookmarks</span>
                  <span className="info-box-number">410</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="info-box">
                <span className="info-box-icon bg-yellow"><i className="fa fa-files-o"></i></span>
                <div className="info-box-content">
                  <span className="info-box-text">Uploads</span>
                  <span className="info-box-number">13,648</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="info-box">
                <span className="info-box-icon bg-red"><i className="fa fa-star-o"></i></span>
                <div className="info-box-content">
                  <span className="info-box-text">Likes</span>
                  <span className="info-box-number">93,139</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="info-box bg-aqua">
                <span className="info-box-icon"><i className="fa fa-bookmark-o"></i></span>
                <div className="info-box-content">
                  <span className="info-box-text">Bookmarks</span>
                  <span className="info-box-number">41,410</span>
                  <div className="progress">
                    <div className="progress-bar" style={ { width: '70%' } }></div>
                  </div>
                    <span className="progress-description">
                      70% Increase in 30 Days
                    </span>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="info-box bg-green">
                <span className="info-box-icon"><i className="fa fa-thumbs-o-up"></i></span>
                <div className="info-box-content">
                  <span className="info-box-text">Likes</span>
                  <span className="info-box-number">41,410</span>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: '70%' }}></div>
                  </div>
                    <span className="progress-description">
                      70% Increase in 30 Days
                    </span>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="info-box bg-yellow">
                <span className="info-box-icon"><i className="fa fa-calendar"></i></span>
                <div className="info-box-content">
                  <span className="info-box-text">Events</span>
                  <span className="info-box-number">41,410</span>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: '70%' }}></div>
                  </div>
                  <span className="progress-description">
                    70% Increase in 30 Days
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="info-box bg-red">
                <span className="info-box-icon"><i className="fa fa-comments-o"></i></span>
                <div className="info-box-content">
                  <span className="info-box-text">Comments</span>
                  <span className="info-box-number">41,410</span>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: '70%' }}></div>
                  </div>
                    <span className="progress-description">
                      70% Increase in 30 Days
                    </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-xs-6">
              <div className="small-box bg-aqua">
                <div className="inner">
                  <h3>150</h3>
                  <p>New Orders</p>
                </div>
                <div className="icon">
                  <i className="fa fa-shopping-cart"></i>
                </div>
                <a href="#" className="small-box-footer">
                  More info <i className="fa fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-xs-6">
              <div className="small-box bg-green">
                <div className="inner">
                  <h3>53<sup style={{ fontSize: '20px' }}>%</sup></h3>
                  <p>Bounce Rate</p>
                </div>
                <div className="icon">
                  <i className="ion ion-stats-bars"></i>
                </div>
                <a href="#" className="small-box-footer">
                  More info <i className="fa fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-xs-6">
              <div className="small-box bg-yellow">
                <div className="inner">
                  <h3>44</h3>
                  <p>User Registrations</p>
                </div>
                <div className="icon">
                  <i className="ion ion-person-add"></i>
                </div>
                <a href="#" className="small-box-footer">
                  More info <i className="fa fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-xs-6">
              <div className="small-box bg-red">
                <div className="inner">
                  <h3>65</h3>
                  <p>Unique Visitors</p>
                </div>
                <div className="icon">
                  <i className="ion ion-pie-graph"></i>
                </div>
                <a href="#" className="small-box-footer">
                  More info <i className="fa fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </page>
      </div>
    );
  }
}
