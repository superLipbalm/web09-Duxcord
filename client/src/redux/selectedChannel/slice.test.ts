import reducer, { setSelectedChannel, resetSelectedChannel } from './slice';

describe('selectedChannel slice', () => {
  describe('reducer', () => {
    it('setSelectedChannel', () => {
      const initialState = {
        type: '',
        id: null,
        name: '',
      };
      const state = reducer(
        initialState,
        setSelectedChannel({
          type: 'meetingChannel',
          id: 1,
          name: 'typeScript강의하는 곳',
        }),
      );
      expect(state.name).toBe('typeScript강의하는 곳');
    });
  });
});
