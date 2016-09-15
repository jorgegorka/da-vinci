import { Meteor } from 'meteor/meteor';
import React from 'react';
import { mount, render } from 'enzyme';
import { expect } from 'meteor/practicalmeteor:chai';
import DaVinci from './da_vinci.jsx'

Meteor.user = function () {
  return { _id: 1234, username: 'testuser', profile: { name: 'Test user' } }
};

describe('DaVinci', function() {
  it('should render', function() {
    const daVinciContent = mount(<DaVinci />);
    //expect(daVinciContent.contains(<div id="main-app" className="container body"></div>)).to.equal(true);
    expect(daVinciContent).to.equal(true);
  });
});
