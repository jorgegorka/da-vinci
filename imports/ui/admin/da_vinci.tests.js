import React from 'react';
import { shallow } from 'enzyme';
import { chai } from 'meteor/practicalmeteor:chai';
import DaVinci from './da_vinci.jsx'

describe('Dashboard', function() {
  it('should render', function() {
    const item = shallow(<DaVinci />);
    chai.assert(item.hasClass('body'));
    chai.assert(!item.hasClass('main_containerfdsa'));

    //chai.assert.equal(item.find('.editing').length, 0);
    //chai.assert.equal(item.find('input[type="text"]').prop('defaultValue'), 'testing');
  });
});
