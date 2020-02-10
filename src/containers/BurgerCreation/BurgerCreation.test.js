import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { BurgerCreation } from './BurgerCreation';
import BuildControls from '../../components/Burger/Controls/Controls';

configure({ adapter: new Adapter() });

describe('<BurgerCreation', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<BurgerCreation ings={()=>{salad=0}}/>);
    });

    it('should render <BuildContols> when receiving ingredients', () => {
    //    wrapper.setProps({ings:{salad:0}})
        expect(wrapper.find(BuildControls)).toHaveLength(1);
    })
})