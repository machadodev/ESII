import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Menu from './Menu';

configure({ adapter: new Adapter() });

describe('CanPlay tests', () => {
  const wrapper = shallow(<Menu />);

  it('should throw exception when prop is null', async () => {
    expect(() => wrapper.instance().canPlay(null)).toThrow(
      'props cannot be null',
    );
  });

  it('should return false when no player is passed', async () => {
    const props = {
      players: [{}],
    };

    expect(wrapper.instance().canPlay(props)).toBe(false);
  });
});
