import React from 'react';
import { shallow, mount, render } from 'enzyme'
import App from './App';

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Comment from './Comment'

Enzyme.configure({adapter: new Adapter()})

describe('<Comment/>',()=> {
  it('renders without crashing', () => {
    const comment = {
        comment: 'test'
    }
    const wrapper = shallow(<Comment comment={comment} />)
    expect(wrapper.length).toBe(1)
    expect(wrapper.is('.well')).toBe(true)
    expect(wrapper.text()).toBe(comment.comment)
  })
})