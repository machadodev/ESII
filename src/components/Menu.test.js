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

  it('should return false when no human player is passed', async () => {
    const props = {
      players: [{ value: 'jogador_ia' }],
    };

    expect(wrapper.instance().canPlay(props)).toBe(false);
  });

  it('should return false when less than three players are passed', async () => {
    const props = {
      players: [{ value: 'jogador_ia' }, { value: 'humano' }],
    };

    expect(wrapper.instance().canPlay(props)).toBe(false);
  });

  it('should return false when less than three players are passed', async () => {
    const props = {
      players: [
        { value: 'jogador_ia' },
        { value: 'humano' },
        { value: 'nao_participa' },
      ],
    };

    expect(wrapper.instance().canPlay(props)).toBe(false);
  });

  it('should return true when more than three players are passed and at least one of them is a human player', async () => {
    const props = {
      players: [
        { value: 'humano' },
        { value: 'jogador_ia' },
        { value: 'jogador_ia' },
      ],
    };

    expect(wrapper.instance().canPlay(props)).toBe(true);
  });

  it('should return false when more than three players are passed but none of them is a human player', async () => {
    const props = {
      players: [
        { value: 'jogador_ia' },
        { value: 'jogador_ia' },
        { value: 'jogador_ia' },
      ],
    };

    expect(wrapper.instance().canPlay(props)).toBe(false);
  });

  it('should return false when more than six players are passed', async () => {
    const props = {
      players: [
        { value: 'humano' },
        { value: 'humano' },
        { value: 'jogador_ia' },
        { value: 'jogador_ia' },
        { value: 'jogador_ia' },
        { value: 'jogador_ia' },
        { value: 'jogador_ia' },
      ],
    };

    expect(wrapper.instance().canPlay(props)).toBe(false);
  });
});
