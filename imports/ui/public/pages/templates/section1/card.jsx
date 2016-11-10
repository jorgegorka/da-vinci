import React, { Component, PropTypes } from 'react';
import i18n from 'meteor/universe:i18n';

export default class PublicSection1Card extends Component {
  render() {
    return(
			<div className={ this.props.className }>
				<div className="card card-image">
					<h3>{ this.props.pageContent.imageTitle }</h3>
					<figure className="figure">
						<a href="">
							<img src={ this.props.pageContent.imagePath } alt={ this.props.pageContent.imageTitle } />
						</a>
						<div className="mask mask-light">
							<nav>
								<a className="icon icon-inverse icon-size-3 icon-bg-1 icon-rounded" href="">
									<i className="fa fa-link"></i>
								</a>
							</nav>
						</div>
					</figure>
					<div className="figure-info">
						<div className="heading-divider"></div>
						<div className="single-product-description" dangerouslySetInnerHTML={ { __html: this.props.pageContent.text } } ></div>
					</div>
				</div>
			</div>
    );
  }
}

PublicSection1Card.propTypes = {
  pageContent: PropTypes.object.isRequired
};
