import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'meteor/practicalmeteor:chai';
import Dashboard from './dashboard.jsx'

describe('Dashboard', function() {
  it('should render', function() {
    const dashboardContent = shallow(<Dashboard />);
    expect(dashboardContent.contains(<h3>About</h3>)).to.equal(true);
  });
});
