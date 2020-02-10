import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { NavLink } from 'react-router-dom';

import NavigationItems from './NavigationItems';

configure({ adapter: new Adapter() });

describe('<NavigationItems />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NavigationItems />);
    });

    it('should render 2 items when unauthenticated', () => {
        expect(wrapper.find('li')).toHaveLength(2);
    });

    it('should render 3 items when authenticated', () => {
        wrapper.setProps({ isAuth: true })
        expect(wrapper.find('li')).toHaveLength(3);
    });

    //  it('should render logout items when authenticated', () => {
    //     wrapper.setProps({ isAuth: true })
    // expect(wrapper.contains(<NavLink to='/logout'>Logout</NavLink>)).to.equal(true);
    // });
});