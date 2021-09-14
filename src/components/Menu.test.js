import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Menu from './Menu';
import { ARCHETYPE, MAX_PLAYERS_IN_SESSION } from '../helper/CONSTANTS';

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

  it('should return false when no human player is passed', async () => {
    const props = {
      players: [{ value: ARCHETYPE.ARTIFICIAL_INTELLIGENCE.value }],
    };

    expect(wrapper.instance().canPlay(props)).toBe(false);
  });

  it('should return false when less than three players are passed', async () => {
    const props = {
      players: [
        { value: ARCHETYPE.ARTIFICIAL_INTELLIGENCE.value },
        { value: ARCHETYPE.HUMAN.value },
      ],
    };

    expect(wrapper.instance().canPlay(props)).toBe(false);
  });

  it('should return false when less than three players are passed', async () => {
    const props = {
      players: [
        { value: ARCHETYPE.ARTIFICIAL_INTELLIGENCE.value },
        { value: ARCHETYPE.HUMAN.value },
        { value: ARCHETYPE.NOT_PLAYABLE.value },
      ],
    };

    expect(wrapper.instance().canPlay(props)).toBe(false);
  });

  it('should return true when more than three players are passed and at least one of them is a human player', async () => {
    const props = {
      players: [
        { value: ARCHETYPE.HUMAN.value },
        { value: ARCHETYPE.ARTIFICIAL_INTELLIGENCE.value },
        { value: ARCHETYPE.ARTIFICIAL_INTELLIGENCE.value },
      ],
    };

    expect(wrapper.instance().canPlay(props)).toBe(true);
  });

  it('should return false when more than three players are passed but none of them is a human player', async () => {
    const props = {
      players: [
        { value: ARCHETYPE.ARTIFICIAL_INTELLIGENCE.value },
        { value: ARCHETYPE.ARTIFICIAL_INTELLIGENCE.value },
        { value: ARCHETYPE.ARTIFICIAL_INTELLIGENCE.value },
      ],
    };

    expect(wrapper.instance().canPlay(props)).toBe(false);
  });

  it('should return false when more than six players are passed', async () => {
    const props = {
      players: [
        { value: ARCHETYPE.HUMAN.value },
        { value: ARCHETYPE.HUMAN.value },
        { value: ARCHETYPE.ARTIFICIAL_INTELLIGENCE.value },
        { value: ARCHETYPE.ARTIFICIAL_INTELLIGENCE.value },
        { value: ARCHETYPE.ARTIFICIAL_INTELLIGENCE.value },
        { value: ARCHETYPE.ARTIFICIAL_INTELLIGENCE.value },
        { value: ARCHETYPE.ARTIFICIAL_INTELLIGENCE.value },
      ],
    };

    expect(wrapper.instance().canPlay(props)).toBe(false);
  });
});

describe('onChangeValueHandler', () => {
  const wrapper = shallow(<Menu />);

  it('should throw exception when id is null', async () => {
    expect(() => wrapper.instance().onChangeValueHandler(null, 'any')).toThrow(
      'id cannot be null',
    );
  });

  it('should throw exception when value is null', async () => {
    expect(() => wrapper.instance().onChangeValueHandler('any', null)).toThrow(
      'value cannot be null',
    );
  });

  it('should throw exception when id is NaN', async () => {
    expect(() => wrapper.instance().onChangeValueHandler('any', 'any')).toThrow(
      'id cannot be NaN',
    );
  });

  it('should throw exception if value is not on the domain', async () => {
    expect(() => wrapper.instance().onChangeValueHandler(1, 'any')).toThrow(
      'value is not on the domain',
    );
  });

  it('should not throw exception if value is on the domain', async () => {
    expect(
      wrapper
        .instance()
        .onChangeValueHandler(1, { value: ARCHETYPE.HUMAN.value }),
    ).toBeUndefined();
  });

  it('should throw exception if id is out of range', async () => {
    expect(() => wrapper
      .instance()
      .onChangeValueHandler(MAX_PLAYERS_IN_SESSION + 1, 'any')).toThrow('id cannot be out of range');
    expect(() => wrapper.instance().onChangeValueHandler(-1, 'any')).toThrow(
      'id cannot be out of range',
    );
  });
});
